import ACTION_TYPES from "../constants/action-types";
import {FetchMarketFulfilledActionType} from "../constants/types";
import {MarketData, AssetDataAPI} from "../constants/interfaces";

export const marketReducer = (
  state: MarketData[] = [],
  action: FetchMarketFulfilledActionType
): MarketData[] => {
  switch (action.type) {
    case ACTION_TYPES.MARKET.FETCH_MARKET_FUlLFILLED: {
      const marketsData: MarketData[] = action.payload
        .filter((asset: AssetDataAPI) => {
          const {markets} = asset;

          return (
            asset.assetName &&
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
        .map((asset: AssetDataAPI) => ({
          id: asset.markets[0].id.trim(),
          name: asset.assetName,
          pair: asset.markets[0].marketSymbol.trim(),
          symbol: asset.markets[0].baseSymbol.trim(),
          marketCap: asset.marketCap,
          averageLastPrice:
            (parseFloat(asset.markets[0].ticker.highPrice) +
              parseFloat(asset.markets[0].ticker.lowPrice)) /
            2,
        }));

      return marketsData;
    }

    default:
      return state;
  }
};
