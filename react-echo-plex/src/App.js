import React, { Component } from 'react';
import { wc } from './wc';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: 'app'
    };
  }
  setVal() {
    this.setState({
      signal: 'Hello'
    });
  }
  logEvent(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <echo-plex
          signal={this.state.signal}
          ref={
            wc({
            echoEmitted: e => this.logEvent(e)
          })}
        />
        <button onClick={() => this.setVal()}>Change the Signal</button>
      </div>
    );
  }
}

export default App;
