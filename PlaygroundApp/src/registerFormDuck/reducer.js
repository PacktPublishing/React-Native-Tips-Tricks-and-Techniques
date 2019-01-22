import * as t from './actionTypes'
import Reporter from '../Reporter'


export const InitialState = {
    username: '',
    password: '',
    fullname: '',

    log: null,
}

export default function reducer(state = InitialState, action) {
    switch (action.type) {
    case t.UPDATE_FORM:
        const newState = { ...state, ...action.payload }
        // console.log(newState)
        return newState
    case t.REGISTER_USER:
        const data = {
            username: state.username,
            password: state.password,
            fullname: state.fullname,
        }
        Reporter.info('Register button tapped', { username: state.username })
        return {
            ...state,
            log: JSON.stringify(data),
        }
    default:
        return state
    }  
}
