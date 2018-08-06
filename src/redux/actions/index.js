import {
    SEARCH_CHANGE, GET_POSTS, GET_POST, MOBILE_CHANGED, PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, GET_USER_DATA
} from './types';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

export * from './AuthActions';
export * from './PostActions';

export const termChanged = (text) => {
    return {
        type: SEARCH_CHANGE,
        payload: text
    }
};

