import { createActiontypes } from '../utils/actions';
// handle all things related to Elections
const ACTIONS = createActiontypes([
   'ADD_NOTIFICATION',
]);

const INITIAL_STATE = {
   notifications: ['Your resume has been approved!', 'Would you like to schedule your Mock Interview for 10/21 10 AM PST?']
};


export default function notifications(state = INITIAL_STATE, action) {
    const { payload } = action;
    switch(action.type) {
        case ACTIONS.ADD_NOTIFICATION: 
            let arr = state.notifications.concat(payload)
            return {
                ...state,
                notifications: arr
            }
        default:
            return state;
    }
}

export function addNotification(notification) {
    return {
        type: ACTIONS.ADD_NOTIFICATION,
        payload: notification
    }
}