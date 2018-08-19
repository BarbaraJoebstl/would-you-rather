import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    render() {
        const { question } = this.props

        const { id, author, optionOne, optionTwo } = question
        return (
            <Link to={`/question/${id}`}>
                <div>
                    <div>{author}</div>
                    <div>{optionOne.text}</div>
                    <div>{optionTwo.text}</div>
                    <div>{id}</div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question: question
        // TODO: sort by time
    }
}

export default connect(mapStateToProps)(Question)