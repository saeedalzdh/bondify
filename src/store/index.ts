import {createStore, combineReducers, applyMiddleware} from "redux";
import {createEpicMiddleware, combineEpics} from "redux-observable";

import {StateType, AllActionsTypes} from "../constants/types";
import {marketReducer, symbolReducer} from "../reducers";
import {fetchMarketEpic, fetchSymbolEpic} from "../epics";

const epicMiddleware = createEpicMiddleware<
  AllActionsTypes,
  AllActionsTypes,
  StateType
>();

const rootEpic = combineEpics(fetchMarketEpic, fetchSymbolEpic);

const rootReducer = combineReducers({
  markets: marketReducer,
  symbol: symbolReducer,
});

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
