import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {persistStore, persistReducer} from "redux-persist";
import {AsyncStorage} from 'react-native';
const middleware = [thunk];
middleware.push(createLogger());
//
// const store = createStore(
//     reducers,
//     {},
//     compose(
//         applyMiddleware(...middleware),
//     )
// );

const persistConfig = {
    key: 'rootPersist',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middleware),
);

let persistor = persistStore(store);

export {store, persistor};
