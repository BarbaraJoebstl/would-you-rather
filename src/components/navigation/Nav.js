import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {logOut} from "../../actions/auth";
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
                    <AppBar position="dynamic">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                Would you rather...
                            </Typography>
                            <Typography color="inherit" aria-label="Menu">
                                <NavLink to='/' exact>HOME</NavLink>
                            </Typography>
                            <Typography color="inherit" aria-label="Menu">
                                <NavLink to='/leaderboard' >Leaderboard</NavLink>
                            </Typography>
                            <Typography color="inherit" aria-label="Menu">
                                <NavLink to='/new' >add new question</NavLink>
                            </Typography>


                            {this.props.currentUser ?
                                <div>
                                    <Avatar alt={this.props.currentUser.name} src={this.props.currentUser.avatarURL} />
                                    <span>Hello, {this.props.currentUser.name}! </span>
                                    <button onClick={(e) => {this.handleLogout()}}>LOGOUT</button>
                                </div> :
                                <Link color="inherit" to={'/login'}>Login</Link>
                            }
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