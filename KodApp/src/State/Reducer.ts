import { TypedReducer } from "redoodle";
import { IStoreState } from "./IStoreState";

export const Reducer = TypedReducer.builder<IStoreState>().build();
