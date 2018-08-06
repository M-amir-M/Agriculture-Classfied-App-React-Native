import React from 'react';
import {View, Text, Thumbnail} from 'native-base';
import {Image, findNodeHandle, StyleSheet, TouchableOpacity} from "react-native";
import {drawer} from "../assets/styles"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {Actions} from 'react-native-router-flux';
import {BlurView} from "react-native-blur";
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {logoutUser} from "../redux/actions";
// add two line to android/app/build.gradle
// renderscriptTargetApi 20
// renderscriptSupportModeEnabled true


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    absolute: {
        width: 300,
        height: '100%',
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
    outerCircle: {
        borderRadius: 60,
        width: 120,
        height: 120,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    innerCircle: {
        borderRadius: 55,
        width: 110,
        height: 110,
        margin: 5,
    },
    name: {
        fontFamily: 'IRANSansMobile',
        fontSize: 18,
        color: '#fff'
    }
});

class DrawerLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {viewRef: null};
    }

    componentWillMount(){
        // console.log(this.props.user)
    }

    imageLoaded() {
        this.setState({viewRef: findNodeHandle(this.backgroundImage)});
    }

    onLogout(){
        this.props.logoutUser();
    }

    render() {
        const scene = Actions.currentScene;
        const {user} = this.props;

        const thumbnail = user != null ? {uri : user.thumbnail}:require('../assets/images/avatar.jpg');
        const name = user != null ? user.name : '';
        return (
            <View style={drawer.container}>
                <Image
                    ref={(img) => {
                        this.backgroundImage = img;
                    }}
                    source={require('../assets/images/back.jpg')}
                    style={styles.absolute}
                    onLoadEnd={this.imageLoaded.bind(this)}
                />
                <BlurView
                    style={styles.absolute}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}
                />
                <View style={{flex: 1}}>
                    <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.outerCircle}>
                            {/*require('../assets/images/avatar.png')*/}
                            <Thumbnail style={styles.innerCircle} source={thumbnail}/>
                        </View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={{flex: 0.7, backgroundColor: 'rgba(0,0,0,0.1)'}}>
                        <TouchableOpacity onPress={() => Actions.home()}>
                            <ListItem iconName="home" active={scene == 'home'} title="ٌصفحه اصلی"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.profile()}>
                            <ListItem iconName="user" active={scene == 'profile'} title="پروفایل"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.login()}>
                            <ListItem iconName="login" active={scene == 'login'} title="ورود"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.categoryFilter()}>
                            <ListItem iconName="graph" active={scene == 'categoryFilter'} title="دسته بندی"/>
                        </TouchableOpacity>
                        <ListItem iconName="bell" active={scene == 'notification'} title="اعلانات"/>

                        <TouchableOpacity onPress={this.onLogout.bind(this)}>
                            <ListItem iconName="logout" active={scene == 'logout'} title="خروج"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {user} = auth;
    return {user};
};

export default connect(mapStateToProps,{logoutUser})(DrawerLayout);
