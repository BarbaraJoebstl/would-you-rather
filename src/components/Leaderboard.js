import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        let users = this.props.users;

        return (
            <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>score: {user.name}, answerde: {user.countAnswered}, questions: {user.countQuestions}, {user.score}</div>
                </div>
            ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const usersWithScore = Object.values(users).map((user) => {
        return Object.assign({}, user, {
            countAnswered: Object.keys(user.answers).length,
            countQuestions: user.questions.length,
            score: Object.keys(user.answers).length + user.questions.length
        })
    });

    return {
        users: usersWithScore.sort((a,b) => {return b.score-a.score})
    }
}


export default connect(mapStateToProps)(Leaderboard)