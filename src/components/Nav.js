import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Nav() {
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
            </ul>
        </ nav>
    )
}
