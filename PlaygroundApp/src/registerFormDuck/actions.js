import * as t from './actionTypes'


export const updateForm = dict => ({
    type: t.UPDATE_FORM,
    payload: { ...dict }, 
})

export const registerUser = () => ({
    type: t.REGISTER_USER,
})
