
import { receiveUsers } from './users'
import { receiveQuestions } from
    './questions'
import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'
import { logIn } from './auth';

//const AUTHED_ID = 'tylermcginnis'
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