import {
    MOBILE_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    GET_USER_DATA
} from './types';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {baseUrl} from "../../consts";


export const mobileChange = (mobile) => {
    return {
        type: MOBILE_CHANGED,
        payload: mobile
    }
};

export const passwordChange = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
};

export const loginUser = ({mobile, password}) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: `${baseUrl}/login`,
            params: {mobile, password},
            headers: {Accept: 'application/json'}
        }).then(function (response) {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: response.data.data
            });
            Actions.home();
        }).catch(function (error) {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: error.response.data.message
            });
        });
    }

};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_DATA,
            payload: null
        });
        Actions.reset('splash');
    };
};

export const getUserData = (api_token) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: `${baseUrl}/user?api_token=${api_token}`,
            // params : {api_token},
            headers: {Accept: 'application/json'}
        }).then(function (response) {
            dispatch({
                type: GET_USER_DATA,
                payload: response.data.data
            });
            Actions.reset('drawer');
        }).catch(function (error) {
            Actions.reset('drawer')
        })
    };

};
