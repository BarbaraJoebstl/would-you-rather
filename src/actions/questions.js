import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'


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

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        const newQuestion = {author: authedUser, optionOneText, optionTwoText}

        return saveQuestion(newQuestion)
            .then((question) => dispatch(addQuestion(question)))
            .then(()=> dispatch(hideLoading()))
    }
}

function addQuestionAnswer(authedUser, qid, selectedAnswer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser: authedUser,
        qid: qid,
        selectedAnswer
    }
}

export function handleAddQuestionAnswer(qid, selectedAnswer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        const question = {authedUser, qid, answer: selectedAnswer}

        dispatch(showLoading())
        return saveQuestionAnswer(question)
            .then(() => dispatch(addQuestionAnswer(question.authedUser, question.qid, question.answer)))
            .then(() => dispatch(hideLoading()))
    }
}