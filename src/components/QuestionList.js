import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import SwipeableViews from 'react-swipeable-views'
import Grid from '@material-ui/core/Grid'

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};


class QuestionList extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    filterAnsweredQuestions(questions, authedUser) {
        return  questions.filter(question => (
            [...question.optionOne.votes,
            ...question.optionTwo.votes,].some(userId => userId === authedUser)
        ));
    }

    filterUnansweredQuestions(questions, authedUser) {
        return  questions.filter(question => (
            ![...question.optionOne.votes,
            ...question.optionTwo.votes,].some(userId => userId === authedUser)
        ));
    }


    render() {

        let answered = this.filterAnsweredQuestions(this.props.questions, this.props.authedUser)
        let unanswered = this.filterUnansweredQuestions(this.props.questions, this.props.authedUser)

        return (
            <div>
                <div>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                        >
                            <Tab label="Unanswered" />
                            <Tab label="Answered" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer>
                            <Grid container spacing={24} style={{padding: 24}}>
                                {unanswered.map((question) => (
                                    <Grid item xs={12} sm={6} lg={4} xl={3} key={question.id}>
                                        <Question  id={question.id} />
                                    </Grid>
                                ))}
                                </Grid>
                        </TabContainer>

                        <TabContainer>
                            <Grid container spacing={24} style={{padding: 24}}>
                                {answered.map((question) => (
                                    <Grid item xs={12} sm={6} lg={4} xl={3} key={question.id}>
                                        <Question  id={question.id} />
                                    </Grid>
                                ))}
                            </Grid>
                        </TabContainer>
                    </SwipeableViews>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    return Object.assign({}, props, {
        authedUser,
        questions: Object.values(questions)
            .sort((a,b) =>(b.timestamp - a.timestamp))
            .map((question) => (Object.assign({}, question, {
                authorName: users[question.author].name,
                authorAvatarURL: users[question.author].avatarURL
            }))),
        users
    })
}

export default connect(mapStateToProps)(QuestionList)