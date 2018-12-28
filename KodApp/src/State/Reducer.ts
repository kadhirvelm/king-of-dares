import { setWith, TypedReducer } from "redoodle";
import { SetDare } from "./Actions";
import { IStoreState } from "./IStoreState";

export const Reducer = TypedReducer.builder<IStoreState>()
  .withHandler(SetDare.TYPE, (state, dare) => {
    return setWith(state, {
      dare
    });
  })
  .build();
