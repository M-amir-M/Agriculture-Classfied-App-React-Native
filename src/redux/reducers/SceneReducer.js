import { ActionConst } from 'react-native-router-flux';
const SceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }
};

export default SceneReducer;