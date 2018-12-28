import classNames from "classnames";
import * as React from "react";
import { Transition } from "react-transition-group";
import { IDare } from "../Dispatchers/ServerDispatcher";
import styles from "./DisplayDare.module.scss";

export interface IDisplayDareProps {
  dare: IDare;
}

export interface IDisplayDareState {
  dare: IDare;
}

export class DisplayDare extends React.PureComponent<
  IDisplayDareProps,
  IDisplayDareState
> {
  public state: IDisplayDareState = {
    dare: this.props.dare
  };

  public componentDidUpdate() {
    if (this.props.dare.dareText !== this.state.dare.dareText) {
      setTimeout(() => {
        this.setState({ dare: this.props.dare });
      }, 300);
    }
  }

  public render() {
    return (
      <Transition
        in={this.props.dare.dareText === this.state.dare.dareText}
        timeout={300}
      >
        {state => (
          <div
            key={this.state.dare.dareText}
            className={classNames(styles["dare-text"], state)}
          >
            {this.state.dare.dareText}
          </div>
        )}
      </Transition>
    );
  }
}
