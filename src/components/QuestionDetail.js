import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QuestionDetail extends Component {
    render() {
        const { question, authedUser } = this.props

        return (
                <div>
                    <div>authed User {authedUser} asks</div>

                    <div>{question.authorName} asks</div>
                    <div>{question.optionOne.text}</div>
                    <div>{question.optionTwo.text}</div>
                    // TODO show percentage
                    <div>User has answered? : {question.isAnswerdeByAuthUser}</div>
                </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users}, props) {
    const {id} = props.match.params
    const question = questions[id]

    return Object.assign({}, props, {
        authedUser,
        question: question ? Object.assign({}, question, {
            authorName: users[question.author].name,
            authorAvatarURL: users[question.author].avatarURL,
            isAnswerdeByAuthUser: (question.optionOne.votes.includes(authedUser)
                || (question.optionTwo.votes.includes(authedUser)))
        }): null,
        users
    })


}

export default connect(mapStateToProps)(QuestionDetail)