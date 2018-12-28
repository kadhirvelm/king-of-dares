import { TypedAction } from "redoodle";
import { IDare } from "../Dispatchers/ServerDispatcher";

export const SetDare = TypedAction.define("Server_Actions//SET_DARE")<IDare>();
