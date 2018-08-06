import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    PixelRatio,
} from 'react-native';
import React, {Component} from 'react';

import {Actions, ActionConst, Scene, Drawer, Lightbox, Modal} from 'react-native-router-flux';
import TabIcon from './components/tabs/MainTabBar';
import Home from "./screens/Home";
import Header from "./components/Header";
import Splash from "./screens/Splash";
import DrawerLayout from "./components/DrawerLayout";
import Post from "./screens/Post";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import CreatePost from "./screens/CreatePost";
import {Button} from "native-base";
import BaseLightbox from "./components/BaseLightbox";
import CategoryFilter from "./screens/CategoryFilter";
import Register from "./screens/Register";
import Category from "./components/Category";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98,
        height: 65
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
});

class Tags extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text>Tags</Text>
            </View>
        );
    }
}
class NewsFeed extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text>NewsFeed</Text>
            </View>
        );
    }
}
class Settings extends Component {
    render() {
        return (
            <BaseLightbox verticalPercent={0.7} horizontalPercent={0.5}>
                <Text>Welcome to roocket</Text>
                <Text>Learn React native</Text>
            </BaseLightbox>
        );
    }
}

//MyApp Main Class
const Scenes = Actions.create(
    <Scene key="root" hideNavBar>
        <Drawer
            key="drawer"
            contentComponent={DrawerLayout}
            drawerPosition="right"
            drawerWidth={300}
        >
            <Lightbox>
                <Scene key="category" component={Category}/>
                <Scene key="main"
                       initial
                       hideNavBar>
                    <Scene key="home"
                           initial={true}
                           iconName="home"
                           hideNavBar={true}
                           component={Home}
                    />
                    <Scene key="categoryFilter"
                           iconName="list"
                           hideNavBar={true}
                           component={CategoryFilter}
                    />
                    <Scene key="product"
                           iconName="user"
                           hideNavBar={true}
                           component={Home}
                    />
                    <Scene key="profile"
                           iconName="user"
                           hideNavBar={true}
                           component={Profile}
                    />
                    <Scene key="createPost"
                           iconName="user"
                           hideNavBar={true}
                           component={CreatePost}
                    />
                    <Scene key="post"
                           navBar={Header}
                           component={Post}/>
                </Scene>

            </Lightbox>
        </Drawer>
        <Scene key="login" hideNavBar component={Login}/>
        <Scene key="register" hideNavBar component={Register}/>
        <Scene key="splash" initial hideNavBar component={Splash}/>
    </Scene>
);
export default Scenes;

