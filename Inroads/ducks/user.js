import { createActiontypes } from '../utils/actions';
// handle all things related to Elections
const ACTIONS = createActiontypes([
   'LOGIN',
   'CHANGE_TYPE',
   'CHANGE_USER'
]);

const INITIAL_STATE = {
   login: false,
   type: 'alumni',
   name: 'Jane Doe',
   profession: 'Full Timer',

};


export default function user(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch(action.type) {
        case ACTIONS.LOGIN: 
            return {
                ...state,
                login: payload
            }
        case ACTIONS.CHANGE_TYPE: 
            return {
                ...state,
                type: payload
            }
        case ACTIONS.CHANGE_USER:
            return {
                ...state,
                type: payload.type,
                name: payload.name,
                profession: payload.profession
            }
        default:
            return state;
    }
}

export function login() {
    return {
        type: ACTIONS.LOGIN,
        payload: true
    }
}

export function changeType(type) {

    return {
        type: ACTIONS.CHANGE_TYPE,
        payload: type
    }
}

export function changeUser(type) {

    return {
        type: ACTIONS.CHANGE_USER,
        payload: type
    }
}