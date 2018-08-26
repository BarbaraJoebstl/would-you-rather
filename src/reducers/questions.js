import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            console.log(action)
            const { question } = action;
                return {
                ... state,
                [question.id]: question,
            }
        case ADD_QUESTION_ANSWER:
        return {
        ...state,
            isRetrieving: action.isRetrieving,
            questions: {...state.questions,
            [action.qid]: {
        ...state.questions[action.qid],
                [action.answer]: {
            ...state.questions[action.qid][action.answer],
                    votes: state.questions[action.qid][action.answer].votes.concat([action.authedUser])
            }
        }
        },
        }
        default:
            return state
    }
}
