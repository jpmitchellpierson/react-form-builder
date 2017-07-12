import React, { Component } from 'react';
import Create from './components/createPage';
import App from './App'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      create: [],
      preview: [],
      export: {}
    }
  }

  render() {
    // if path is '/', display should equal create
    // if path is '/preview' display should equal preview
    // if path is '/export' display should equal export
    return (
      <div>
        {this.state.display}
        <Create form={this.state.create} />
        <Preview preview={this.state.preview} />
        <Export export={this.state.export} />
      </div>
    );
  }
}

export default Container;