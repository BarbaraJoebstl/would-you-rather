import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/_DATA'
import {handleAddQuestion} from "../actions/questions";

// controlled component
class NewQuestion extends Component {

        state = {
            optionOne: '',
            optionTwo: ''
        }

    handleChange(e) {

        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props

        dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
            .then(() => {
                this.props.history.push('/')
            });

        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        return (
            <div>
                <h3>HELLO NEw question Would you rather ...?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Option One</label>
                    <textarea type="text"
                              value={this.state.optionOne}
                              name="optionOne"
                              onChange={(e) => this.setState({ optionOne: e.target.value })}
                              />
                    <label>Option Two</label>
                    <textarea type="text"
                              value={this.state.optionTwo}
                              name="optionTwo"
                              onChange={(e) => this.setState({ optionTwo: e.target.value })}/>
                    <button
                    type='submit'
                    disabled={this.state.optionOne === '' || this.state.optionTwo === ''}>Submit</button>
                </form>
            </div>

    )
    }
}


export default connect()(NewQuestion)