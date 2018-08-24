import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    render() {
        const { question } = this.props

        if (question == null) {
            return <p>:( nothing here id</p>
        }
        return (
             <Link to={`/question/${question.id}`}>

                <div>
                    <div>{question.authorName} asks</div>
                    <div>{question.optionOne.text}</div>
                    <div>{question.optionTwo.text}</div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: question ? Object.assign({}, question, {
            authorName: users[question.author].name }) : null
    }
}

export default withRouter(connect(mapStateToProps)(Question))