import {gql, useQuery} from "@apollo/client";
import React, {useEffect} from "react";
import {Paper} from "../design-system/Paper";
import {Address} from "../components/Address";
import {InfoTooltip} from "../components/InfoTooltip";
import {Helmet} from "react-helmet";
import {RTHeader, SortState, Table, useSort} from "../components/Table";
import {GetUsersQuery} from "../generated/graphql";
import {Column, useSortBy, useTable} from 'react-table';
import {useQueryWithTimeTravel} from "../TimeTravel";
import {SkeletonTableRow} from "../components/SkeletonLoader";
import {formatSeconds, FormattedTime, TimeBetween, TimeToNow} from "../components/FormattedTime";
import {KeepValue} from "../components/KeepValue";
import {KeepTag} from "../components/CurrencyTags";
import Tippy, {useSingleton} from "@tippyjs/react";
import {FixedNumber} from "ethers";
import {useMemo} from "react";
import {LabelWithBackgroundProgress} from "./Deposit/StatusBox";

const GRANTS_QUERY = gql`
    query GetGrants(
        $orderBy: Grant_orderBy,
        $direction: OrderDirection,
        $block: Block_height
    ) {
        grants(first: 1000, orderBy: $orderBy, orderDirection: $direction, block: $block) {
          id,
          grantee,
          revokedAt,
          revokedAmount,
          revokedWithdrawn,
          revocable,
          amount,
          duration,
          timestamp,
          start,
          cliff,
          withdrawn,
          staked,
          stakingPolicy,
          transactionHash,
        }
    }
`;


export function Grants() {
  const sortState = useSort("timestamp");

  const { loading, error, data } = useQueryWithTimeTravel<GetUsersQuery>(GRANTS_QUERY, {
    variables: {
      orderBy: sortState.column,
      direction: sortState.direction
    }
  });

  if (error) return <p>Error :( {""+ error}</p>;

  return  <div style={{padding: '20px'}}>
    <Helmet>
      <title>Grants</title>
    </Helmet>
    <h1 style={{marginTop: 0, marginBottom: 25}}>
      Grants
    </h1>
    <Paper padding>
      <GrantsTable data={data} sortState={sortState} loading={loading} />
    </Paper>
  </div>
}


const KnownStakingPolicies: {[address: string]: {label: string, description?: string}} = {
  // NB: Adaptive Policy:
  // - You can find the multiplier in the constructor arguments
  // - You can find the stakeahead time in constructor arg number 3: Decode to decimal is the time in seconds.
  '0x1b612f89eee49b0fb1dcd429cf2109a9699acd53': {
    label: "Permissive",
    description: 'Allows the grantee to stake the entire grant, regardless of its unlocking status.'
  },
  '0x36d293d15168ccdf93d1294d4a51a6d6c070f1ff': {
    label: 'Adaptive 5x/90d',
    description: 'Allows the grantee to always stake 5 times the minimum stake, or the amount that would be unlocked 90 days in the future, if it is greater.'
  },
  '0x68d9e6f0bee28a2ba31ab4410fd42205550d5612': {
    label: 'Adaptive 1x/90d',
    description: 'Allows the grantee to always stake the minimum stake, or the amount that would be unlocked 90 days in the future, if it is greater.'
  },
  '0x3715f0775310d970697f164699820e1a93109eac': {
    label: 'Adaptive 0x/90d',
    description: 'Allows the grantee to stake the amount that would be unlocked 90 days in the future.'
  },
  '0x57edf653ba095feea910fa62298654dfc588d762': {
    label: 'Adaptive 5x/-',
    description: 'Allows the grantee to always stake 5 times the minimum stake.'
  },
  '0x4c3ad59b5a32f2d076051d01d6f58bc75d278159': {
    label: 'Guaranteed Minimum',
    description: 'Allows the grantee to always stake the minimum stake, or the unlocked amount if greater.'
  },
}


export function GrantsTable(props: {
  data: any,
  loading?: boolean,
  sortState: SortState,
}) {
  const {data} = props;
  const [source, target] = useSingleton();

  const columns = React.useMemo<(Column & {label?: string})[]>(
    () => [
      {
        label: "Updated At",
        tooltip: "The last time any action affected this grant, including withdrawal, revocation or staking.",
        Header: RTHeader,
        accessor: 'timestamp',
        Cell: ({value, row}) => {
          return <TimeToNow time={value} />
        },
      },
      {
        Header: 'Grantee',
        Cell: ({value}) => {
          return <Address address={value} />
        },
        accessor: 'grantee',
      },
      {
        accessor: 'state',
        label: 'State',
        Header: RTHeader,
        tooltip: "Light Grey: Withdrawn, Green: Staked, Red: Revoked, Dark Gray: Rest",
        disableSortBy: true,
        Cell: ({value, row}) => {
          return <GrantAmountsAsBar grant={row.original as any}/>
        }
      },
      {
        label: 'Amount',
        Header: RTHeader,
        Cell: ({value}) => {
          return <>
            <KeepTag /> <KeepValue raw={value} />
          </>
        },
        accessor: 'amount',
      },
      {
        label: 'Withdrawn',
        Header: RTHeader,
        Cell: ({value}) => {
          return <>
            <KeepTag /> <KeepValue raw={value} />
          </>
        },
        accessor: 'withdrawn',
      },
      {
        label: 'Staked',
        Header: RTHeader,
        accessor: 'staked',
        Cell: ({value}) => {
          return <>
            <KeepTag /> <KeepValue raw={value} />
          </>
        },
      },
      {
        label: 'Duration',
        tooltip: "Total duration of the grant, over which time it gradually unlocks.",
        Header: RTHeader,
        accessor: 'duration',
        Cell: ({value, row}) => {
          const obj = row.original as any;
          const progress = Math.max(0, (Date.now() / 1000) - parseInt(obj.cliff));
          const percent = progress / parseInt(value);

          if (percent >= 1) {
            return <span style={{color: 'gray'}}>{formatSeconds(value)}</span>
          }

          return <LabelWithBackgroundProgress
            progress={percent}
            singleColor={"#f7e4ce"}
          >
            {formatSeconds(value)}
          </LabelWithBackgroundProgress>;
        }
      },
      {
        Header: 'Cliff',
        accessor: 'cliff',
        Cell: ({value, row}) => {
          if ((row.original as any).start == value) {
            return "";
          }

          return <TimeBetween earlier={(row.original as any).start} later={value} />
        },
      },
      // {
      //   Header: 'Revocable',
      //   Cell: ({value}) => {
      //     return value ? "yes" : 'no'
      //   },
      //   accessor: 'revocable',
      // },
      // {
      //   Header: 'Revoked Amount',
      //   accessor: 'revokedAmount',
      //   Cell: ({value}) => {
      //     if (!value) { return ""; }
      //     return <>
      //       <KeepTag /> <KeepValue raw={value} />
      //     </>
      //   }
      // },
      // {
      //   Header: 'Revoked Withdrawn',
      //   accessor: 'revokedWithdrawn',
      //   Cell: ({value}) => {
      //     if (!value) { return ""; }
      //     return <>
      //       <KeepTag /> <KeepValue raw={value} />
      //     </>
      //   }
      // },
      {
        Header: RTHeader,
        label: "Start",
        accessor: 'start',
        Cell: ({value}) => {
          return <FormattedTime time={value} format={"day-full"} />
        },
      },
      {
        Header: 'Revoked',
        accessor: 'revokedSummary',
        Cell: ({value, row}) => {
          const obj = row.original as any;
          if (!obj.revokedAt || obj.revokedAt == '0') {
            if (!obj.revocable) {
              return <small style={{color: 'gray'}}>non-revocable</small>
            }
            return "";
          }
          return <>
            <FormattedTime time={obj.revokedAt} format={"day-full"} />
          </>
        }
      },
      // {
      //   Header: RTHeader,
      //   label: "Revoked At",
      //   accessor: 'revokedAt',
      //   Cell: ({value}) => {
      //     if (!value ||  value == "0") { return ""; }
      //     return <FormattedTime time={value} format={"day-full"} />
      //   }
      // },
      {
        Header: RTHeader,
        label: "Staking Policy",
        Cell: ({value}) => {
          const policy = KnownStakingPolicies[value] || {
            label: null
          }
          return <>
            <Address address={value} children={policy.label} /> {policy.description ? <InfoTooltip singleton={target}>{policy.description}</InfoTooltip> : null}
          </>
        },
        accessor: 'stakingPolicy',
      },
    ],
    []
  )

  const currentSortBy = useMemo(() => {
    return [{id: props.sortState.column, desc: props.sortState.direction === 'desc'}]
  }, [props.sortState]);

  const tableInstance = useTable({
    columns,
    data: useMemo(() => {
      return data?.grants ?? [];
    }, [data?.grants]),
    useControlledState: state => {
      return React.useMemo(
          () => ({
            ...state,
            sortBy: currentSortBy
          }),
          [state, currentSortBy]
      )
    },
    manualSortBy: true,
    autoResetSortBy: false,
    // Custom data we pass through
    sortState: props.sortState
  }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy }
  } = tableInstance;

  return <>
    <Tippy singleton={source} delay={500} />
    <Table style={{width: '100%'}} {...getTableProps()}>
      <thead>
      {
        headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => {
                return <th {...column.getHeaderProps()}>
                  {
                    column.render('Header')
                  }
                </th>
              })
            }
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {props.loading ? <SkeletonTableRow columns={columns.length} /> : null}
      {
        rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {
                        cell.render('Cell')
                      }
                    </td>
                  )
                })
              }
            </tr>
          )
        })}
      </tbody>
    </Table>
  </>
}


const GrantAmountsAsBar = React.memo((props: {
  grant: any
}) => {
  const obj = props.grant;
  const total = FixedNumber.from(obj.amount);
  if (total.isZero()) {
    return null;
  }
  const staked = FixedNumber.from(obj.staked).divUnsafe(total);
  const withdrawn = FixedNumber.from(obj.withdrawn).divUnsafe(total);
  const revoked = FixedNumber.from(obj.revokedAmount).divUnsafe(total);
  const remainder = FixedNumber.from("1").subUnsafe(staked).subUnsafe(revoked).subUnsafe(withdrawn);

  // return <div style={{width: '150px', position: 'relative', height: '20px', }}>
  //   <div style={{width: '20%', position: 'absolute', backgroundColor: 'red', left: 0, top: 0, bottom: 0, right: 20}} />
  //   <div style={{width: '30%', position: 'absolute', backgroundColor: 'green', left: 21, top: 0, bottom: 0, right: 90}} />
  // </div>

  // gray: #607d8b
  // orange: #ffc107
  const h = FixedNumber.from( "100");
  return <div style={{width: '150px', height: '20px', display: 'flex', flexDirection: 'row'}}>
    <div style={{backgroundColor: '#dcdcdc', width: `${withdrawn.mulUnsafe(h).toString()}px`}} />
    <div style={{backgroundColor: '#4caf50', width: `${staked.mulUnsafe(h).toString()}px`}} />
    <div style={{backgroundColor: '#90a4ae', width: `${remainder.mulUnsafe(h).toString()}px`}} />
    <div style={{backgroundColor: '#f44336', width: `${revoked.mulUnsafe(h).toString()}px`}} />
  </div>
});