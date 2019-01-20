import { combineReducers } from 'redux'

export default combineReducers({
    registerForm: require('./registerFormDuck').reducer,
})
