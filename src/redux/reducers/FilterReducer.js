import {SEARCH_CHANGE} from '../actions/types';

const INITIAL_STATE = {term:''};

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case SEARCH_CHANGE:
            return {...state,term: action.payload}
        default:
            return state;
    }
}