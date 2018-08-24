import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Question extends Component {
    render() {
        const { question } = this.props

        if (question == null) {
            return <p>:( nothing here id</p>
        }
        return (
                <div>
                   <Card >
                     <CardContent>
                         

                         <Typography color="textSecondary">
                             {question.authorName} asks
                         </Typography>
                         <Typography variant="headline" component="h2">
                             {question.optionOne.text}
                         </Typography>
                         <Typography color="textSecondary">
                             OR
                         </Typography>
                         <Typography variant="headline" component="h2">
                             {question.optionTwo.text}
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="medium">
                             <Link to={`/question/${question.id}`}>Go to poll</Link>
                         </Button>
                     </CardActions>
                 </Card>
                </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: question ? Object.assign({}, question, {
            authorName: users[question.author].name }) : null
    }
}

export default withRouter(connect(mapStateToProps)(Question))