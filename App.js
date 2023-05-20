import React, {Component} from 'react';
import RootNavigation from './src/RootNavigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <RootNavigation />;
  }
}

export default App;
