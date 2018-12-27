import {
  createStore,
  loggingMiddleware,
  reduceCompoundActions,
  StoreEnhancer
} from "redoodle";
import { applyMiddleware, Store } from "redux";
import { IStoreState } from "./IStoreState";
import { Reducer } from "./Reducer";

export default function configureStore(): Store<IStoreState> {
  const logging = applyMiddleware(loggingMiddleware()) as StoreEnhancer;
  const initialState: IStoreState = {};

  return createStore(reduceCompoundActions(Reducer), initialState, logging);
}
