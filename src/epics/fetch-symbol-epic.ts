import {AllActionsTypes, StateType} from "../constants/types";
import ACTION_TYPES from "../constants/action-types";
import {map, filter, mergeMap} from "rxjs/operators";
import {Epic} from "redux-observable";
import {gql} from "@apollo/client";
import gqlClient from "../services/gql-client";
import {fetchSymbolFulfilled} from "../actions";
import {isOfType} from "typesafe-actions";

const getFetchSymbolQuery = gql`
  query marketSymbol($marketSymbolId: String) {
    market(id: $marketSymbolId) {
      id
      marketSymbol
      ticker {
        percentChange
        lastPrice
        lowPrice
        highPrice
        baseVolume
        quoteVolume
      }
    }
  }
`;

export const fetchSymbolEpic: Epic<AllActionsTypes, AllActionsTypes, StateType> = (
  action$
) =>
  action$.pipe(
    filter(isOfType(ACTION_TYPES.MARKET.FETCH_SYMBOL)),
    mergeMap((action) =>
      gqlClient
        .query({
          query: getFetchSymbolQuery,
          variables: {
            marketSymbolId: action.payload,
          },
        })
        .catch((error) => error)
    ),
    map((response) => {
      let symbolData = [];

      if (response.data && "market" in response.data) {
        symbolData = response.data.market;
      } else {
        console.error(response.message);
      }

      return fetchSymbolFulfilled(symbolData);
    })
  );
