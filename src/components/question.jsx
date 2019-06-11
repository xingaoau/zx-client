import React, { Component, Fragment } from 'react'
import { 
	Form,
	Input,
	Button
} from 'antd';
import PropTypes from 'prop-types'

class Question extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err)
        this.props.handleSubmit()
    })
  }

  render() {
    // use antd form component
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
			labelCol: {
			  xs: { span: 24 },
			  sm: { span: 6 },
			},
			wrapperCol: {
			  xs: { span: 24 },
			  sm: { span: 12 },
			},
		}
		const tailFormItemLayout = {
			wrapperCol: {
			  xs: {
				span: 24,
				offset: 0,
			  },
			  sm: {
				span: 16,
				offset: 6,
			  },
			},
		}

		return (
			<Fragment>
        <h1>Magic 8 ball, What you have in the store?</h1>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="Question">
						{getFieldDecorator('question', {
							rules: [{ required: true, message: 'Please input quesiton', whitespace: true }],
						})(<Input />)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">Ask</Button>
					</Form.Item>
				</Form>
			</Fragment>
    )
  }
}

Question.propTypes = {
	handleSubmit: PropTypes.func
};

// export component for testing purpose
export const QuestionForm = Form.create()(Question);

export default QuestionForm;