import ACTION_TYPES from "../constants/action-types";
import {
  FetchMarketActionType,
  FetchMarketFulfilledActionType,
  FetchSymbolActionType,
  FetchSymbolFulfilledActionType,
  ApplySearchQueryActionType,
} from "../constants/types";

export const fetchMarket = (): FetchMarketActionType => ({
  type: ACTION_TYPES.MARKET.FETCH_MARKET,
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

export const applySearchQuery = (payload: any[]): ApplySearchQueryActionType => ({
  type: ACTION_TYPES.SEARCH.APPLY_SEARCH_QUERY,
  payload,
});
