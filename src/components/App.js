import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div>
            HURRAY
          <div>
              <Route path='/' exact component={QuestionList} />
            </div>
        </div>
        </Fragment>
      </Router>
    );
  }
}


export default connect()(App);
