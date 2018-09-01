import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


class Question extends Component {
    render() {
        const { question } = this.props

        if (question == null) {
            return <p>:( nothing here id</p>
        }
        return (
                   <Card>
                     <CardContent>
                         <div color="textSecondary" className="flex-container">
                             <Avatar alt={question.authorName}
                                     src={question.authorAvatar} />
                             {question.authorName} asks
                         </div>
                         <Typography color="textSecondary">
                             Would you rather
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
                             <Link to={`/question/${question.id}`}>
                                 show details</Link>
                         </Button>
                     </CardActions>
                 </Card>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const question = questions[props.id]

    return {
        authedUser,
        question: question ? Object.assign({}, question, {
            authorName: users[question.author].name,
            authorAvatar: users[question.author].avatarURL}) : null,
    }
}

export default withRouter(connect(mapStateToProps)(Question))