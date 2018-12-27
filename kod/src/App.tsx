import React, { Component } from "react";
import styles from "./App.module.scss";
import { connect } from "react-redux";

class UnconnectedApp extends Component {
  public render() {
    return <div className={styles.body}>Hello World!</div>;
  }
}

function mapStateToProps() {
  return {};
}

export const App = connect(mapStateToProps)(UnconnectedApp);
