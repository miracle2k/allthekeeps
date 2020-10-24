import React from "react";
import {gql, useQuery} from "@apollo/client";
import {FormattedTime} from "../../components/FormattedTime";


const PROPERTIES_QUERY = gql`
    query GetOperatorProperties($id: ID!) {
        stakeEvents(where: {operator: $id}, orderBy: timestamp, orderDirection: desc) {
            id,
            message
            timestamp
        }
        
        operator(id: $id) {
            locks {
                id,
                until,
                # lock creator seems to be always the keep. why does a random beacon not create a log entry? 
                creator,
                operator {
                    id
                }
            }
        }
    }
`;

export function Properties(props: {
  operatorId: string
}) {
  const { loading, error, data } = useQuery(PROPERTIES_QUERY, {variables: {
      id: props.operatorId,
    }});

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error :( {""+ error}</p>;

  console.log("stakevents", JSON.stringify(data))

  return <div>
    {
      data.operator.locks.map((lock: any) => {
        return <li>
          <FormattedTime time={lock.until} />
          {lock.creator}
        </li>
      })
    }
    <hr />
    {
      data.stakeEvents.map((event: any) => {
        return <li>
          <FormattedTime time={event.timestamp} />
          {event.message}
        </li>
      })
    }
  </div>
}