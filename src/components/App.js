import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import QuestionList from './QuestionList'
import QuestionDetail from './QuestionDetail'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav />
            {this.props.loading === true ? null : <div>
              <Route path='/' exact component={QuestionList} />
              <Route path='/question/:id' component={QuestionDetail} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/new' component={NewQuestion} />
            </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
