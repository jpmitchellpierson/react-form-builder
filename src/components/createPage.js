import React, { Component } from 'react';
import Question from './question';
// import Preview from './previewPage';
// import Export from './exportPage';

class Create extends Component {
  constructor(props) {
    super(props);
    this.addInput = this.addInput.bind(this);
    this.state = {
      questions: []
    }
  }

  addInput(event) {
    event.preventDefault();
    this.setState({ questions: [...this.state.questions, <Question />] });
  }

  render() {
    return (
      <div>
        <div>{this.state.questions}</div>
        <button id="addInput" onClick={this.addInput}>Add Input</button>
        {/*<Preview preview={this.props.preview} />
        <Export export={this.props.export} />*/}
      </div>
    );
  }
}

export default Create;