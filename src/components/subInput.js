import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';


class SubInput extends Component {
  constructor() {
    super();
    this.addSubInput = this.addSubInput.bind(this);
    this.state = {
      subInputs: []
    }
  }

  addSubInput(event) {
    event.preventDefault();
    this.setState({ subInputs: [...this.state.subInputs, <SubInput />] });
  }

  render() {
    return (
      <div className="subInput">
        <span className="condition">
          <h5>Condition</h5>

          <FormControl componentClass="select" placeholder="select">
            <option value="equals">Equals</option>
            <option value="greaterThan">Greater Than</option>
            <option value="lessThan">lessThan</option>
          </FormControl>

          <FormControl componentClass="select" placeholder="select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
          </FormControl>
        </span>

        <span>
          <h5>Question</h5>
          <input placeholder="Write a question"></input>
        </span>

        <div>
          <h5>Type</h5>
          <FormControl componentClass="select" placeholder="select">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="boolean">Yes/No</option>
          </FormControl>
        </div>

        <div>
          <Button type="submit" className="addSubInput" onClick={this.addSubInput}>
            Add SubInput
					</Button>
          <Button type="submit" className="deleteQuestion">
            Delete
    			</Button>
        </div>

        <div>{this.state.subInputs}</div>
      </div>
    )
  }
}

export default SubInput;