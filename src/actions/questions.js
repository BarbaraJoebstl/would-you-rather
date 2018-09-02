import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import {showLoading, hideLoading} from 'react-redux-loading'
import {addUserAnswer, addUserQuestion} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'


export function addQuestion(question) {
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

export function addQuestionAnswer(authedUser, qid, selectedAnswer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser: authedUser,
        qid: qid,
        selectedAnswer
    }
}


