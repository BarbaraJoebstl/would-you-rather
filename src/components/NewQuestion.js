import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {handleAddQuestion} from "../actions/questions";
import Button from '@material-ui/core/Button';

// controlled component
class NewQuestion extends Component {

        state = {
            optionOneText: '',
            optionTwoText: '',
            toHome: false,
        }

    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props

        dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }))
    }

    render() {

        const {optionOneText, optionTwoText, toHome} = this.state

        if (toHome === true) {
            return <Redirect to='/' />
                }


                return (

            <div>
                <h3>HELLO New question Would you rather ...?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Option One</label>
                    <textarea type="text"
                              value={optionOneText}
                              name="optionOneText"
                              onChange={(e) => this.setState({ optionOneText: e.target.value })}
                              />
                    <label>Option Two</label>
                    <textarea type="text"
                              value={this.state.optionTwoText}
                              name="optionTwoText"
                              onChange={(e) => this.setState({ optionTwoText: e.target.value })}/>
                    <Button
                    type='submit'
                    size="large" color="primary"
                    disabled={optionOneText === '' || optionTwoText === ''}>Submit</Button>
                </form>
            </div>

    )
    }
}


export default connect()(NewQuestion)