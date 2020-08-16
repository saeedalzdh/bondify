import ACTION_TYPES from "./action-types";
import {MarketData, SymbolData} from "./interfaces";

export type StateType = {
  markets: MarketData[];
  symbol: SymbolData;
};

export type AllActionsTypes =
  | FetchMarketActionType
  | FetchMarketFulfilledActionType
  | FetchSymbolActionType
  | FetchSymbolFulfilledActionType;

export type FetchMarketActionType = {
  type: typeof ACTION_TYPES.MARKET.FETCH_MARKET;
  payload?: string;
};

export type FetchMarketFulfilledActionType = {
  type: typeof ACTION_TYPES.MARKET.FETCH_MARKET_FUlLFILLED;
  payload: [];
};

export type FetchSymbolActionType = {
  type: typeof ACTION_TYPES.MARKET.FETCH_SYMBOL;
  payload?: string;
};

export type FetchSymbolFulfilledActionType = {
  type: typeof ACTION_TYPES.MARKET.FETCH_SYMBOL_FUlLFILLED;
  payload: [];
};
