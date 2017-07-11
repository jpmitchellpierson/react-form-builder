import React, { Component } from 'react';
import Question from './question';
// import Export from './exportPage';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    }

    this.addInput = this.addInput.bind(this);
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
        {/*<Export form={this.state.questions}/>*/}
      </div>
    );
  }
}

export default Create;