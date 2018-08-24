import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA.js'

import users from '../reducers/users.js';

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestion (question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(question) {
    return _saveQuestionAnswer(question)
}