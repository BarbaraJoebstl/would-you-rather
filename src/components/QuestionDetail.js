import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {handleAddQuestionAnswer} from "../actions/questions";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Grid from '@material-ui/core/Grid';


class QuestionDetail extends Component {

    state = {
        selectedAnswer : this.props.question.optionOne
    }

    handleChange = event => {
        this.setState({ selectedAnswer: event.target.value });
    };


    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props

        dispatch(handleAddQuestionAnswer(this.props.question.id, this.state.selectedAnswer))
            .then(() => {this.props.history.push('/')})
    }

    render() {
        const { question } = this.props

        return (
            <Grid container spacing={24} style={{padding: 24}} justify="center">
            {
                !question.isAnsweredByUser &&
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={question.authorAvatarURL}
                                title={question.authorName}
                            />
                            <CardContent>
                                <Typography component="p">
                                    <form onSubmit={this.handleSubmit}>

                                    <FormControl component="fieldset">
                                        <FormLabel component="legend"> {question.authorName}  asks</FormLabel>
                                        <RadioGroup
                                            aria-label="wouldYouRather"
                                            name="would you rather"
                                            value={this.state.selectedAnswer}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                                            <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                                        </RadioGroup>
                                    </FormControl>
                                        <Button type="submit" size="large" color="primary">Vote</Button>
                                    </form>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
            }

                {
                    question.isAnsweredByUser &&
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Card>
                            <Typography component="p">Asked by {question.authorName}</Typography>
                            <div>
                            <p>Would you rather {question.optionOne.text}</p>
                                <progress value={question.votesOptionTwo} max={question.totalAnswers}>
                                </progress>

                                {question.votesOptionOne} out of {question.totalAnswers}

                            </div>

                            <div>
                            <p>Would you rather {question.optionTwo.text}</p>
                                <progress value={question.votesOptionTwo} max={question.totalAnswers}></progress>
                                {question.votesOptionTwo} out of {question.totalAnswers}
                            </div>
                        </Card>
                    </Grid>
                }
            </Grid>
        )
    }
}

function mapStateToProps({ authedUser, questions, users}, props) {
    const {id} = props.match.params
    const question = questions[id]

    return Object.assign({}, props, {
        authedUser,
        question: question ? Object.assign({}, question,
            {
            authorName: users[question.author].name,
            authorAvatarURL: users[question.author].avatarURL,
            votesOptionOne: question.optionOne.votes.length,
            votesOptionTwo: question.optionTwo.votes.length,
            totalAnswers: question.optionTwo.votes.length + question.optionTwo.votes.length,
            isAnsweredByUser: (question.optionOne.votes.includes(authedUser.id)
                || (question.optionTwo.votes.includes(authedUser.id)))
        }): null,
        users
    })


}

export default connect(mapStateToProps)(QuestionDetail)