import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

//default our state to {object} to begin with
export default function (state = {}, action) {
    switch (action.type) {

        case FETCH_POSTS:
            return action.payload

        case FETCH_POST:
            return { ...state, [action.payload.id]: action.payload }

        case DELETE_POST:
            return action.payload

        default:
            return state;
    }
}

