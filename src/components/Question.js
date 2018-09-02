import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

// stateless functional component
const Question = (props) => {
        const { question } = props

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
                             ... {question.optionOne.text} ...
                         </Typography>

                     </CardContent>
                     <CardActions>
                         <Button size="medium">
                             <Link to={`/questions/${question.id}`}>
                                 show details</Link>
                         </Button>
                     </CardActions>
                 </Card>
        )
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