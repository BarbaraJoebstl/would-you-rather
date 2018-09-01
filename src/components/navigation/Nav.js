import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {logOut} from "../../actions/auth";
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


export class Nav extends Component {
        handleLogout() {
            const {dispatch} = this.props;
            dispatch(logOut());
        }

        render() {

            return (
                <div>
                    <AppBar position="static">
                        <Toolbar>

                        <Tabs >
                            <Typography variant="title" color="inherit">
                                Would you rather...
                            </Typography>


                            <Tab label="Home" component={Link} to="/"></Tab>
                            <Tab label="leaderboard"  component={Link} to="/leaderboard"></Tab>
                            <Tab label="add new question" component={Link} to="/new"></Tab>
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