import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionDetail extends Component {
    render() {
        return (
            <div>
                QuestionDetail
            </div>
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

export default connect(mapStateToProps)(QuestionDetail)