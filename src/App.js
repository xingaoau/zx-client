import React, { Component, Fragment } from 'react'
import QuestionForm from './components/question'

import { getAnswer } from './api'
import './App.css'

export default class App extends Component {

	state = {
		answer: '',
		show: true
	}

 	getRandomInt = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min)) + min
	}

  handleSubmit = async () => {
		const type = this.getRandomInt(1, 4)
    const response = await getAnswer(type)
		const result = response.data
    this.setState({
			answer: result.doc[0].answer,
			show: false
		})
  }

  render() {
		const { answer } = this.state

		return (
			<Fragment>
		    <QuestionForm handleSubmit={this.handleSubmit}/>
				{/* <p className="ant-col ant-col-xs-24 ant-col-sm-6" style={{ textAlign: 'right' }}>Answer is: </p>
				<p className="ant-col ant-col-xs-24 ant-col-sm-12">{ answer }</p> */}
				<div className="eight-ball">
					<div className="answer">
						{ this.state.show ? <p id="eight">8</p> : null }
						<p id="answer">{ answer }</p>
					</div>
				</div>
			</Fragment>
		)
  }
}