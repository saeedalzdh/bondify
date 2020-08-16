import ACTION_TYPES from "../constants/action-types";
import {
  FetchMarketFulfilledActionType,
  ApplySearchQueryActionType,
} from "../constants/types";
import {MarketData} from "../constants/interfaces";

export const marketReducer = (
  state: MarketData[] = [],
  action: FetchMarketFulfilledActionType | ApplySearchQueryActionType
): MarketData[] => {
  switch (action.type) {
    case ACTION_TYPES.MARKET.FETCH_MARKET_FUlLFILLED: {
      const marketsData: MarketData[] = action.payload
        .filter((market: any) => {
          const {markets} = market;

          return (
            market.assetName &&
            markets.length &&
            "id" in markets[0] &&
            "marketSymbol" in markets[0] &&
            "baseSymbol" in markets[0] &&
            "ticker" in markets[0] &&
            markets[0].ticker &&
            "highPrice" in markets[0].ticker &&
            "lowPrice" in markets[0].ticker
          );
        })
        .map((market: any) => ({
          id: market.markets[0].id.trim(),
          name: market.assetName,
          pair: market.markets[0].marketSymbol.trim(),
          symbol: market.markets[0].baseSymbol.trim(),
          marketCap: market.marketCap,
          averageLastPrice:
            (parseFloat(market.markets[0].ticker.highPrice) +
              parseFloat(market.markets[0].ticker.lowPrice)) /
            2,
        }));

      return marketsData;
    }

    case ACTION_TYPES.SEARCH.APPLY_SEARCH_QUERY: {
      return [...state].filter((item) => item.name === action.payload[0]);
    }

    default:
      return state;
  }
};
