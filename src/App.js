import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {I18nManager} from 'react-native';
import Scenes from "./Router";
import {Router} from "react-native-router-flux";
import * as configStore from './redux/store';
import {Root} from "native-base";
import {PersistGate} from "redux-persist/es/integration/react";
import Loading from "./components/Loading";

console.disableYellowBox = true;
const { store, persistor } = configStore;

I18nManager.forceRTL(true);

export default class App extends Component {

    render() {

        const ConnectedRouter = connect()(Router);

        return (
            <Provider store={store}>
                <PersistGate
                    loading={<Loading />}
                    persistor={persistor}>
                <Root>
                    <ConnectedRouter scenes={Scenes}/>
                </Root>
                </PersistGate>
            </Provider>
        );
    }
}


