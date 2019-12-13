import React from "react";
import Router from "./Router";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Method `jumpToIndex` is"]);

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default App;
