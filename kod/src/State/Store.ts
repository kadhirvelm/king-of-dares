import {
  createStore,
  loggingMiddleware,
  reduceCompoundActions,
  StoreEnhancer
} from "redoodle";
import { applyMiddleware, Store } from "redux";
import { Reducer } from "./Reducer";
import { IStoreState } from "./IStoreState";

export default function configureStore(): Store<IStoreState> {
  const logging = applyMiddleware(loggingMiddleware()) as StoreEnhancer;
  const initialState: IStoreState = {};

  return createStore(reduceCompoundActions(Reducer), initialState, logging);
}
