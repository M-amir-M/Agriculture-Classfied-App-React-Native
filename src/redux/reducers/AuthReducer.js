import {
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER, MOBILE_CHANGED, GET_USER_DATA
} from '../actions/types';

const INITIAL_STATE = {
    mobile: '',
    password: '',
    user: {
      name:'',
      mobile:'',
      thumbnail:'',
      api_token:'',

    },
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOBILE_CHANGED:
            return { ...state, mobile: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        case GET_USER_DATA:
            return {...state,user:action.payload};
        default:
            return state;
    }
};
