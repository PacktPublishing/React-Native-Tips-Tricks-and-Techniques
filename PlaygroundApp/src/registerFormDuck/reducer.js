import * as t from './actionTypes'


export const InitialState = {
    username: '',
    password: '',
    fullname: '',

    log: null,
}

export default function reducer(state = InitialState, action) {
    switch (action.type) {
    case t.UPDATE_FORM:
        return { ...state, ...action.payload }
    case t.REGISTER_USER:
        const data = {
            username: state.username,
            password: state.password,
            fullname: state.fullname,
        }
        return {
            ...state,
            log: JSON.stringify(data),
        }
    default:
        return state
    }  
}
