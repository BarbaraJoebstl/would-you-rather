import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionList extends Component {
    render() {
        return (
            <h3>HELLO</h3>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    return true
}

export default connect(mapStateToProps)(QuestionList)