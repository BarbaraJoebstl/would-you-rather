import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';


class Login extends Component {


    state =  {
        currentUser : ''
    };

    handleChange = currentUser => event => {
        this.setState({ [currentUser]: event.target.value });
        const {dispatch} = this.props;
        dispatch(logIn(event.target.value));
    };

    render() {
        const {users} = this.props;

        return (

            <Grid container spacing={24} style={{padding: 24}} justify="center">

                <Grid item xs={12} sm={6} lg={4} xl={3}>

            <Card className="card">
                <Grid container justify="center">
                <CardContent>

                    <Typography gutterBottom variant="headline" component="h2">
                            LOGIN
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <FormControl>
                            <InputLabel htmlFor="select-user">Select User</InputLabel>
                            <NativeSelect
                                value={this.state.currentUser}
                                onChange={this.handleChange()}
                                input={
                                    <Input name="user" id="select-user" />
                                }>
                                <option value="" />
                                {users.map((user) => (
                                    <option value={user.id} key={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                                </NativeSelect>
                            <FormHelperText>select a user</FormHelperText>
                        </FormControl>
                    </CardActions>
                </Grid>
                </Card>
            </Grid>
            </Grid>
        )
    }
}



function mapStateToProps({users}, props) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)