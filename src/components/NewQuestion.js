import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {handleAddQuestion} from "../actions/questions";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

// controlled component
class NewQuestion extends Component {

     state = {
            optionOneText: '',
            optionTwoText: '',
            toHome: false,
        }

    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props

        dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }))
    }

    render() {

        const {optionOneText, optionTwoText, toHome} = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }
                return (

                    <Grid container spacing={24} style={{padding: 24}} justify="center">
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Card>
                                    <form onSubmit={this.handleSubmit}>
                                        <i>Would you rather</i>
                        <TextField
                            label="Option one"
                            id="margin-normal"
                            defaultValue={optionOneText}
                            margin="normal"
                            onChange={(e) => this.setState({ optionOneText: e.target.value })}
                        />
                                        <i>or</i>
                                        <TextField
                                            label="Option two"
                                            id="margin-normal"
                                            defaultValue={optionTwoText}
                                            margin="normal"
                                            onChange={(e) => this.setState({ optionTwoText: e.target.value })}
                                        />
                                        <i>?</i>
                    <Button
                    type='submit'
                    size="large" color="primary"
                    disabled={optionOneText === '' || optionTwoText === ''}>Add this question</Button>
                </form>
            </Card>
                                </Grid>
                    </Grid>
    )
    }
}


export default connect()(NewQuestion)