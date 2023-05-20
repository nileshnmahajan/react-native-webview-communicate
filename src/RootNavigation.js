
import React, { Component } from "react";

import HomeScreen from "./Screens/HomeScreen";

class RootNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomeScreen/>
  }
}

export default RootNavigation;

