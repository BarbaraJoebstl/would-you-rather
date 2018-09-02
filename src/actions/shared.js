
import {addUserAnswer, addUserQuestion, receiveUsers} from './users'
import { receiveQuestions, addQuestion, addQuestionAnswer } from
    './questions'
import {getInitialData, saveQuestion, saveQuestionAnswer} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'
import { logIn } from './auth';

const AUTHED_ID = null

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(logIn(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        const newQuestion = {author: authedUser, optionOneText, optionTwoText}

        return saveQuestion(newQuestion)
            .then((question) => {
                dispatch(addQuestion(question)),
                    dispatch(addUserQuestion(question))
            })

            .then(()=> dispatch(hideLoading()))
    }
}

export function handleAddQuestionAnswer(qid, selectedAnswer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        const question = {authedUser, qid, answer: selectedAnswer}

        dispatch(showLoading())
        return saveQuestionAnswer(question)
            .then(() =>  {
                dispatch(addQuestionAnswer(question.authedUser, question.qid, question.answer)),
                    dispatch(addUserAnswer(question.authedUser, question.qid, question.answer))
            })
            .then(() => dispatch(hideLoading()))
    }
}
