import {saveQuestion} from "../utils/api";
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        const newQuestion = {optionOne, optionTwo, authedUser}

        return saveQuestion(newQuestion)
            .then((question) => dispatch(addQuestion(question)))
            .then(()=> dispatch(hideLoading()))
    }
}
