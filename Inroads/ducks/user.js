import { createActiontypes } from '../utils/actions';
// handle all things related to Elections
const ACTIONS = createActiontypes([
   'LOGIN',
]);

const INITIAL_STATE = {
   login: false,
   type: 'alumni'
};


export default function user(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch(action.type) {
        case ACTIONS.LOGIN: 
            return {
                ...state,
                login: payload
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