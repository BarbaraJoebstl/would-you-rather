import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {logOut} from "../actions/auth";
import { Link } from 'react-router-dom'

export class Nav extends Component {
        handleLogout(id) {
            const {dispatch} = this.props;
            dispatch(logOut(id));
        }

        render() {
            return (
        <nav>
            <h3>Navigation:</h3>
            <ul>
                <li>
                    <NavLink to='/' exact>HOME</NavLink>
                </li>
                <li>
                    <NavLink to='/new'>Add Question</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' >Leaderboard</NavLink>
                </li>
                <li>
                {this.props.authedUser ?
                    <button onClick={(e) => {this.handleLogout(this.props.authedUser.id)}}>LOGOUT</button> :
                    <Link to={'/login'}>Login</Link>
                }
                </li>
            </ul>
        </ nav>
            )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)