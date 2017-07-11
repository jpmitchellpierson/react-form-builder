import React, { Component } from 'react';

class Export extends Component {
  // constructor(props) {
  //   super(props);
  // }

  makeObject(obj) {
    let exported = JSON.stringify(this.props.form)
    return exported;
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Export;