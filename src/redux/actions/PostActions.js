import {
    GET_POSTS,
    GET_POST,
    CREATE_POST_TITLE_CHANGED,
    CREATE_POST_DESCRIPTION_CHANGED,
    CREATE_POST_CATEGORY_CHANGED,
    CREATE_POST_IMAGES_CHANGED,
    GET_FILTER_POSTS
} from './types';
import axios from 'axios';
import {baseUrl} from "../../consts";


export const getPosts = (payload) => {
    return (dispatch) => {
        let cats = [];
        if (payload.cats) {
            for (let cat of payload.cats) {
                cats.push(cat.id)
            }
            console.log(payload)
            axios.get(`${baseUrl}/posts?page=${payload.filter_page}&&cats=${cats.join(',')}`).then(function (response) {
                console.log(response.data)
                dispatch({
                    type: GET_FILTER_POSTS,
                    payload: response.data[0]
                });
            }).catch((error)=>{
                console.log(error.response.data);
            });
        }
        else{
            axios.get(`${baseUrl}/posts?page=${payload.page}`).then(function (response) {
                dispatch({
                    type: GET_POSTS,
                    payload: response.data[0]
                });
            }).catch((error)=>{
                console.log(error.response.data);
            });
        }

    }
};

export const getSelectPost = (post_id) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/posts/${post_id}`).then((response) => {
            dispatch({
                type: GET_POST,
                payload: response.data
            });
        })
    }
};

export const createPostTitleChange = (title) => {
    console.log(title);
    return {
        type: CREATE_POST_TITLE_CHANGED,
        payload: title
    }
};

export const createPostDescriptionChange = (description) => {
    return {
        type: CREATE_POST_DESCRIPTION_CHANGED,
        payload: description
    }
};

export const createPostCategoryChange = (category) => {
    return {
        type: CREATE_POST_CATEGORY_CHANGED,
        payload: category
    }
};

export const createPostImagesChange = (images) => {
    return {
        type: CREATE_POST_IMAGES_CHANGED,
        payload: images
    }
};

export const createPost = (data) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${baseUrl}/posts`,
            data: data,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${data.api_token}`,
            }
        }).then(function (response) {
            console.log(response.data)
            // Actions.home();
        }).catch(function (error) {
            console.log(error.response)
        });

        // axios({
        //     method: 'POST',
        //     url: `${baseUrl}/posts`,
        //     params: data.data,
        //     headers: {
        //         Accept: 'application/json',
        //         Authorization: `Bearer ${data.api_token}`,
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }).then(function (response) {
        //     console.log(response.data)
        //     // Actions.home();
        // }).catch(function (error) {
        //
        // });


    }
};

