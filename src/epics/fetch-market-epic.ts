import {AllActionsTypes, StateType} from "../constants/types";
import ACTION_TYPES from "../constants/action-types";
import {map, filter, mergeMap} from "rxjs/operators";
import {Epic} from "redux-observable";
import {gql} from "@apollo/client";
import gqlClient from "../services/gql-client";
import {fetchMarketFulfilled} from "../actions";
import {isOfType} from "typesafe-actions";

const FETCH_MARKET_QUERY = gql`
  query Markets {
    assets(sort: {marketCap: DESC}, page: {limit: 30}) {
      assetName
      marketCap
      markets(
        filter: {
          marketSymbol: {_like: "%Binance%"}
          quoteSymbol: {_in: ["USD", "USDT"]}
        }
      ) {
        id
        marketSymbol
        baseSymbol
        quoteSymbol
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
  }
`;

export const fetchMarketEpic: Epic<AllActionsTypes, AllActionsTypes, StateType> = (
  action$
) =>
  action$.pipe(
    filter(isOfType(ACTION_TYPES.MARKET.FETCH_MARKET)),
    mergeMap(() => gqlClient.query({query: FETCH_MARKET_QUERY})),
    map((response) => fetchMarketFulfilled(response.data.assets))
  );
