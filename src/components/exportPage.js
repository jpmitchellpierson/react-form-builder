import React from 'react';

const Export = (props) => {
    this.props.export = JSON.stringify(this.props.export);
    return (
      <div id="exportWindow">
        {this.props.export}
      </div>
    ); 
}

export default Export;