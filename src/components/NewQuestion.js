import React, { Component } from 'react'
import { connect } from 'react-redux'

// controlled component
class NewQuestion extends Component {
    render() {
        return (
            <h3>HELLO NEw question</h3>
        )
    }
}


export default connect()(NewQuestion)