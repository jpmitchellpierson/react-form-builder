import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import SubInput from './subInput'

class Question extends Component {
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
			<div>
				<form className="questionForm">
					<div>
						<span className="question">
							<h5>Question</h5>
							<input placeholder="Write a question"></input>
						</span>

						<div className="type">
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
					</div>
					<div>{this.state.subInputs}</div>
				</form>
			</div>
		);
	}
}

export default Question;