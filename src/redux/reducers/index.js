import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FilterReducer from "./FilterReducer";
import PostReducer from "./PostReducer";
import SceneReducer from "./SceneReducer";

const rehydrated = (state = false,action)=>{
    switch(action.type){
        case "persist/REHYDRATE":
            return true;
            break;
        default:
            return state;
    }
};

export default combineReducers({
    rehydrated,
    auth : AuthReducer,
    filter : FilterReducer,
    banners : PostReducer,
    scene : SceneReducer,
})