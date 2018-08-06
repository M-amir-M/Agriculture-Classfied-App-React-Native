import {
    CREATE_POST,
    CREATE_POST_TITLE_CHANGED,
    CREATE_POST_DESCRIPTION_CHANGED,
    GET_POST,
    GET_POSTS,
    GET_FILTER_POSTS,
    CREATE_POST_CATEGORY_CHANGED,
    CREATE_POST_IMAGES_CHANGED
} from '../actions/types';
import {AsyncStorage} from "react-native";

const INITIAL_STATE = {
    page: 0,
    posts: [],
    filter_page: 0,
    filter_posts: [],
    selectedPost: {},
    newPost: {
        title: '',
        description: '',
        category: {
            id: null,
            name: null,
            parent: null
        },
        images: [
            {
                source: null,
                data: null
            },
            {
                source: null,
                data: null
            },
            {
                source: null,
                data: null
            },
            {
                source: null,
                data: null
            },
        ],
        changeStatus: false
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POSTS:
            // AsyncStorage.removeItem('banners');
            AsyncStorage.clear();
            if (state.page + 1 === action.payload.current_page) {
                if (action.payload.current_page === 1)
                    return {
                        ...state,
                        page: 1,
                        posts: [...action.payload.data]
                    };

                return {...state, page: action.payload.current_page, posts: [...state.posts, ...action.payload.data]};
            }
            else return state;
        case GET_FILTER_POSTS:
            AsyncStorage.clear();

            // AsyncStorage.clear();
            if (state.filter_page + 1 === action.payload.current_page) {
                return {...state, filter_page: action.payload.current_page, filter_posts: [...state.filter_posts, ...action.payload.data]};
            }
            else return state;
        case GET_POST:
            return {...state, selectedPost: action.payload};
        case CREATE_POST_TITLE_CHANGED:
            return {...state, newPost: {...state.newPost, title: action.payload}};
        case CREATE_POST_DESCRIPTION_CHANGED:
            return {...state, newPost: {...state.newPost, description: action.payload}};
        case CREATE_POST_CATEGORY_CHANGED:
            return {...state, newPost: {...state.newPost, category: action.payload}};
        case CREATE_POST_IMAGES_CHANGED:
            return {
                ...state,
                newPost: {...state.newPost, images: action.payload, changeStatus: !state.newPost.changeStatus}
            };
        default:
            return state;
    }
};