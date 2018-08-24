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


class Login extends Component {


    state =  {
        currentUser : ''
    };

    handleChange = currentUser => event => {
        this.setState({ [currentUser]: event.target.value });
        console.log(currentUser)
        const {dispatch} = this.props;
        dispatch(logIn(event.target.value));
    };

    render() {
        const {users} = this.props;

        return (
            <div> 
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
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
                                }

                            >
                                <option value="" />

                                {users.map((user) => (
                                    <option value={user.id} key={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                                </NativeSelect>
                            <FormHelperText>select a user</FormHelperText>
                        </FormControl>

                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}



function mapStateToProps({users}, props) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)