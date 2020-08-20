import ACTION_TYPES from "../constants/action-types";
import {
  FetchMarketActionType,
  FetchMarketFulfilledActionType,
  FetchSymbolActionType,
  FetchSymbolFulfilledActionType,
} from "../constants/types";

export const fetchMarket = (payload: string): FetchMarketActionType => ({
  type: ACTION_TYPES.MARKET.FETCH_MARKET,
  payload,
});

export const fetchMarketFulfilled = (
  payload: []
): FetchMarketFulfilledActionType => ({
  type: ACTION_TYPES.MARKET.FETCH_MARKET_FUlLFILLED,
  payload,
});

export const fetchSymbol = (payload: string): FetchSymbolActionType => ({
  type: ACTION_TYPES.MARKET.FETCH_SYMBOL,
  payload,
});

export const fetchSymbolFulfilled = (
  payload: []
): FetchSymbolFulfilledActionType => ({
  type: ACTION_TYPES.MARKET.FETCH_SYMBOL_FUlLFILLED,
  payload,
});
