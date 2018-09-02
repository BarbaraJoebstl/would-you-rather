import {ADD_QUESTION_ANSWER} from "./questions";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers(users) 
{ return {
    type: RECEIVE_USERS,
    users,
    }
}

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}

export function addUserAnswer(authedUser, qid, selectedAnswer) {
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        qid,
        selectedAnswer
    }
}
