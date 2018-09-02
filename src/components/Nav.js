import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logOut} from "../actions/auth"
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Avatar from '@material-ui/core/Avatar'


export class Nav extends Component {

    state = {
        value: 0,
    }

    handleLogout() {
        const {dispatch} = this.props
        dispatch(logOut())
    }

    handleChange = (event, value) => {
        this.setState({ value })
    };

    render() {
            return (
                <div>
                    <AppBar position="dynamic">
                        <Toolbar>
                        <Tabs  value={this.state.value}
                               onChange={this.handleChange}
                               centered>
                            <Tab label="Would you rather..." component={Link} to="/"></Tab>
                            <Tab label="leaderboard"  component={Link} to="/leaderboard"></Tab>
                            <Tab label="add new question" component={Link} to="/add"></Tab>
                            {this.props.currentUser ?
                                <div className="flex-container">
                                <Avatar alt={this.props.currentUser.name} src={this.props.currentUser.avatarURL} />
                                <h2>Hello, {this.props.currentUser.name}!</h2>
                                <Tab label="Log out" onClick={(e) => {this.handleLogout()}}>
                                    LOGOUT
                                </Tab>
                                </div>
                                :
                                <Tab label="Log in" component={Link} to="/login"></Tab>
                            }
                        </Tabs>
                        </Toolbar>

                    </AppBar>
                </div>
            )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        currentUser: users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav)