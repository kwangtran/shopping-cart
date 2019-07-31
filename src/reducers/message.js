import * as actions from '../actions/index'
import * as Types from '../constants/ActionsTypes'
import * as Message from '../constants/Message'

const initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default:
            return [...state];
    }
}
export default message;