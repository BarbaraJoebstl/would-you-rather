import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Leaderboard extends Component {
    render() {
        let users = this.props.users;

        return (
            <Grid container spacing={24} style={{padding: 24}} justify="center">

                <Paper>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>User</TableCell>
        <TableCell numeric>Number of answered questions</TableCell>
        <TableCell numeric>Number of questions asked</TableCell>
        <TableCell numeric>total points</TableCell>
    </TableRow>
    </TableHead>
        <TableBody>
            {users.map(user => {
                return (
                    <TableRow
                        key={user.id}>
                        <TableCell component="th" scope="row">
                            <Avatar alt={user.name} src={user.avatarURL} />
                            {user.name}
                        </TableCell>
                        <TableCell numeric>{user.countAnswered}</TableCell>
                        <TableCell numeric>{user.countQuestions}</TableCell>
                        <TableCell numeric>{user.score}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
        </Table>
    </Paper>
            </Grid>

        )
    }
}

function mapStateToProps({ users }) {
    const usersWithScore = Object.values(users).map((user) => {
        return Object.assign({}, user, {
            countAnswered: Object.keys(user.answers).length,
            countQuestions: user.questions.length,
            score: Object.keys(user.answers).length + user.questions.length
        })
    });

    return {
        users: usersWithScore.sort((a,b) => {return b.score-a.score})
    }
}


export default connect(mapStateToProps)(Leaderboard)