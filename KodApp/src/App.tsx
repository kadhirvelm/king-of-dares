import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./App.module.scss";

class UnconnectedApp extends Component {
  public render() {
    return <div className={styles.body}>Hello World!</div>;
  }
}

function mapStateToProps() {
  return {};
}

export const App = connect(mapStateToProps)(UnconnectedApp);
