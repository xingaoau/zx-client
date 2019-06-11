import React, { Component, Fragment } from 'react'
import QuestionForm from './components/question'

import { getAnswer } from './api'

export default class App extends Component {

	state = {
		answer: ''
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
			answer: result.doc[0].answer
		})
  }

  render() {
		const { answer } = this.state

		return (
			<Fragment>
		    <QuestionForm handleSubmit={this.handleSubmit}/>
				<p className="ant-col ant-col-xs-24 ant-col-sm-6" style={{ textAlign: 'right' }}>Answer is: </p>
				<p className="ant-col ant-col-xs-24 ant-col-sm-12">{ answer }</p>
			</Fragment>
		)
  }
}