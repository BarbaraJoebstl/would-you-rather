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

class QuestionDetail extends Component {

    state = {
        selectedAnswer : this.props.question.optionOne.text
    }

    handleChange = event => {
        this.setState({ selectedAnswer: event.target.value });
    };


    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props

        dispatch(handleAddQuestionAnswer(this.props.question.id, 'optionOne'))
            .then(() => {this.props.history.push('/')})
    }

    render() {
        const { question, authedUser } = this.props

        return (
            <div>
            {
                question.isAnswerdeByAuthUser === false &&


                    <div>
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
                                            <FormControlLabel value={question.optionOne.text} control={<Radio />} label={question.optionOne.text} />
                                            <FormControlLabel value={question.optionTwo.text} control={<Radio />} label={question.optionTwo.text} />
                                        </RadioGroup>
                                    </FormControl>
                                        <Button type="submit" size="large" color="primary">Vote</Button>
                                    </form>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
            }

                {
                    question.isAnswerdeByAuthUser === true &&
                    <div>
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




                    </div>
                }
            </div>



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
            isAnswerdeByAuthUser: (question.optionOne.votes.includes(authedUser)
                || (question.optionTwo.votes.includes(authedUser)))
        }): null,
        users
    })


}

export default connect(mapStateToProps)(QuestionDetail)