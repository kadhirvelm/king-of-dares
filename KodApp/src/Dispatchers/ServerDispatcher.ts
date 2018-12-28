import axios from "axios";
import { Dispatch } from "redux";
import { SetDare } from "../State/Actions";
import { retrieveUrl } from "./Utils";

export interface IDare {
  dareText: string;
  totalPlayers: number;
}

export class ServerDispatcher {
  constructor(private dispatch: Dispatch) {}

  public getDare = async () => {
    const dare = await axios.post(retrieveUrl("/dare"), {});
    this.dispatch(SetDare.create(dare.data));
  };
}
