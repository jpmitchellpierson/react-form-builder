import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <div id="previewWindow">
        {this.props.preview}
      </div>
    );
  }
}

export default Preview;