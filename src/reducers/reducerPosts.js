import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
//default our state to {object} to begin with
export default function (state = {}, action) {
    // console.log("action.payload : ", action.payload);
    switch (action.type) {
        
        case FETCH_POSTS:
            // return _.mapKeys(action.payload.data, 'id');
            return action.payload

        case FETCH_POST:
            console.log("below");
            console.log("action.payload : ", action.payload);
            return { ...state, [action.payload.id]: action.payload}            
       

        case DELETE_POST:
            return _.omit(state, action.payload)

        default:
            return state;
    }   
}

