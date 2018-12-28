import classNames from "classnames";
import * as React from "react";
import { Transition } from "react-transition-group";
import { IDare } from "../Dispatchers/ServerDispatcher";
import styles from "./DisplayDare.module.scss";

export interface IDisplayDareProps {
  dare: IDare;
}

export interface IDisplayDareState {
  dareText: string[];
  isViewingDare: boolean;
  rawDare: IDare;
}

const processDareText = (dare: IDare) =>
  dare.dareText.split(/\_/g).filter(text => text !== "");

export class DisplayDare extends React.PureComponent<
  IDisplayDareProps,
  IDisplayDareState
> {
  public state: IDisplayDareState = {
    dareText: processDareText(this.props.dare),
    isViewingDare: false,
    rawDare: this.props.dare
  };

  public componentDidUpdate(previousProps: IDisplayDareProps) {
    if (this.props.dare.dareText !== previousProps.dare.dareText) {
      setTimeout(() => {
        this.setState({
          dareText: processDareText(this.props.dare),
          isViewingDare: false,
          rawDare: this.props.dare
        });
      }, 300);
    }
  }

  public render() {
    return (
      <Transition
        in={this.props.dare.dareText === this.state.rawDare.dareText}
        timeout={300}
      >
        {state => (
          <div
            key={this.state.rawDare.dareText}
            className={classNames(styles["dare-text"], state, {
              [styles["viewing-dare"]]: this.state.isViewingDare
            })}
            onClick={this.changeToView}
          >
            <div
              className={classNames(styles["view-dare"], {
                [styles.flip]: this.state.isViewingDare
              })}
            >
              <div className={classNames(styles.front)}>
                {this.state.rawDare.totalPlayers}
              </div>
              <div className={styles.back}>{this.renderDareText()}</div>
            </div>
          </div>
        )}
      </Transition>
    );
  }

  private renderDareText = () => {
    return (
      <div>
        {this.state.dareText.map((text, index) => (
          <span className={styles[text]} key={index}>
            {text}
          </span>
        ))}
      </div>
    );
  };

  private changeToView = () => this.setState({ isViewingDare: true });
}
