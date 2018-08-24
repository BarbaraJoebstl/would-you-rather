import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {

    filterAnsweredQuestions(questions, authedUser) {
        return  questions.filter(question => (
            [...question.optionOne.votes,
            ...question.optionTwo.votes,].some(userId => userId === authedUser.id)
        ));
    }

    filterUnansweredQuestions(questions, authedUser) {
        return  questions.filter(question => (
            ![...question.optionOne.votes,
            ...question.optionTwo.votes,].some(userId => userId === authedUser.id)
        ));
    }


    render() {

        let unanswered = this.filterUnansweredQuestions(this.props.questions, this.props.authedUser)

        let answered = this.filterAnsweredQuestions(this.props.questions, this.props.authedUser)

        return (
            <div>
                <h3>Unanswered</h3>
                <ul>
                    {unanswered.map((question) => (
                        <li key={question.id}>
                            <Question  id={question.id} />
                            {question.id}
                        </li>
                    ))}
                </ul>
                <h3>Answered</h3>
                <ul>
                    {answered.map((question) => (
                        <li key={question.id}>
                            <Question id={question.id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    return Object.assign({}, props, {
        authedUser,
        questions: Object.values(questions)
            .sort((a,b) =>(b.timestamp - a.timestamp))
            .map((question) => (Object.assign({}, question, {
                authorName: users[question.author].name,
                authorAvatarURL: users[question.author].avatarURL
            }))),
        users
    })
}

export default connect(mapStateToProps)(QuestionList)