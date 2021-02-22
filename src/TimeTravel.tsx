import React, { useContext } from "react";
import {useQuery, useSubscription} from "@apollo/client";
import {OperationVariables} from "@apollo/client/core";
import {DocumentNode} from "graphql";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {QueryHookOptions, SubscriptionHookOptions} from "@apollo/client/react/types/types";
import update from 'immutability-helper';
import {useLocation} from "react-router";
import {FieldNode, OperationDefinitionNode} from "graphql/language/ast";
import { useMemo } from "react";

export type TimeTravelContextType = {
  block: number|undefined,
}

export const TimeTravelContext = React.createContext<TimeTravelContextType>({
  block: undefined
});

export function TimeTravelState(props: {
  children: any
}) {
  const l = useLocation();
  const p = new URLSearchParams(l.search);
  const block = p.get("block") ? parseInt(p.get("block")!) : undefined;
  return <TimeTravelContext.Provider value={{block}}>
    {props.children}
  </TimeTravelContext.Provider>
}

export function useTimeTravelBlock(): number|null {
  const context = useContext(TimeTravelContext);
  return context.block ? context.block : null;
}

export function useIsTimeTravel(): boolean {
  const context = useContext(TimeTravelContext);
  return !!context.block;
}

/**
 * TheGraph does not allow us to make the block-height argument optional - when given, it needs to have a
 * valid value. So we would have to write two versions of each query where we want to time travel.
 *
 * Instead, we use a helper to patch the query object to remove the `block` argument.
 *
 * This hook is a full replacement for `useQuery`, which will do all of this automatically - the input query
 * has to be set up with a block_Height parameter though.
 */
export function useQueryWithTimeTravel<TData = any, TVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: QueryHookOptions<TData, TVariables>) {
  const block = useTimeTravelBlock();

  let queryToUse = useMemo(() => {
    if (block) {
      return query;
    }
    else {
      // Otherwise, we assume that the query defines a $block variable, and includes that $block in the filter.
      // When then find that argument and remove it. We do not have to remove it from `query()` (only from the field).
      // NB: We assume that the query to edit is always the first operation (i.e. fragments come after).

      let toUse = query;
      const num = (query.definitions[0] as any).selectionSet.selections.length;
      for (let i=0; i<num; i++) {
        // Find the argument we have to remove.
        const argumentIdx = ((query.definitions[0] as OperationDefinitionNode).selectionSet.selections[i] as FieldNode).arguments?.findIndex(
            argument => argument.name.value === 'block');
        if (!argumentIdx) {
          continue;
        }

        toUse = update(toUse as any, {
          definitions: {
            0: {
              selectionSet: {
                selections: {
                  [i]: {
                    arguments: {
                      $unset: [argumentIdx.toString()]
                    }
                  }
                }
              }
            }
          }
        });
      }

      return toUse;
    }
  }, [query, block]);

  return useQuery(queryToUse, {
    ...options,
    variables: {
      ...options?.variables,
      block: block ? {number: block} : undefined
    } as unknown as TVariables
  });
}


/**
 * In time-travel mode, we generally do not want to do subscriptions, so this drop-in replacement of `useSubscription`
 * will disable itself automatically if time-travel is enabled.
 */
export function useTimeTravelSafeSubscription<TData = any, TVariables = OperationVariables>(subscription: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: SubscriptionHookOptions<TData, TVariables>) {
  const block = useTimeTravelBlock();

  return useSubscription(subscription, {
    ...options,
    skip: !!block
  });
}