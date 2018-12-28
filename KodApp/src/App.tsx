import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styles from "./App.module.scss";
import { DisplayDare } from "./Components/DisplayDare";
import { IDare, ServerDispatcher } from "./Dispatchers/ServerDispatcher";
import { IStoreState } from "./State/IStoreState";

export interface IAppStoreProps {
  dare: IDare | undefined;
}

export interface IAppDispatchProps {
  getDare(): void;
}

class UnconnectedApp extends PureComponent<IAppStoreProps & IAppDispatchProps> {
  public componentDidMount() {
    this.props.getDare();
  }

  public render() {
    const { dare } = this.props;
    if (dare === undefined) {
      return null;
    }

    return (
      <>
        <div className={styles.body}>
          <DisplayDare dare={dare} />
        </div>
        <div className={styles["new-dare"]} onClick={this.props.getDare}>
          New Dare
        </div>
      </>
    );
  }
}

function mapStateToProps(state: IStoreState): IAppStoreProps {
  return {
    dare: state.dare
  };
}

function mapDispatchToProps(dispatch: Dispatch): IAppDispatchProps {
  return {
    getDare: new ServerDispatcher(dispatch).getDare
  };
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
