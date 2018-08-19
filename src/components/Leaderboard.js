import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        return (
            <h3>HELLO Leaderboard</h3>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    return true
}

export default connect(mapStateToProps)(Leaderboard)