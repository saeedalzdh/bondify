import ACTION_TYPES from "../constants/action-types";
import {FetchSymbolFulfilledActionType} from "../constants/types";
import {SymbolData} from "../constants/interfaces";

export const symbolReducer = (
  state: SymbolData[] = [],
  action: FetchSymbolFulfilledActionType
): SymbolData[] => {
  switch (action.type) {
    case ACTION_TYPES.MARKET.FETCH_SYMBOL_FUlLFILLED: {
      return action.payload;
    }

    default:
      return state;
  }
};
