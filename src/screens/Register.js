import React, {Component} from 'react';
import { Input, Item, Text, Thumbnail, View,Toast} from "native-base";
import {BlurView} from "react-native-blur";
import Icon from 'react-native-vector-icons/Ionicons';
import {Keyboard,Image, findNodeHandle, StyleSheet, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {connect} from "react-redux";
import {loginUser, passwordChange, mobileChange} from "../redux/actions";
import {Actions} from 'react-native-router-flux';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    absolute: {
        width: '100%',
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
        borderRadius: 65,
        width: 130,
        height: 130,
    },
    name: {
        fontFamily: 'IRANSansMobile',
        fontSize: 18,
        color: '#fff'
    }
});

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {viewRef: null};
    }

    componentDidUpdate(){
        if(this.props.error){
            Toast.show({
                text: this.props.error,
                textStyle: { fontFamily: "IRANSansMobile" },
                buttonText: "بستن",
                buttonTextStyle: { fontFamily: "IRANSansMobile" },
                type: "danger",
                position: "top",
                duration: 20000
            })
        }
    }

    onMobileChange(text) {
        this.props.mobileChange(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onRegisterButtonPress() {
        const {mobile , password} = this.props;
        this.props.loginUser({mobile,password});
        Keyboard.dismiss();
    }

    imageLoaded() {
        this.setState({viewRef: findNodeHandle(this.backgroundImage)});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    ref={(img) => {
                        this.backgroundImage = img;
                    }}
                    source={require('../assets/images/register-bg.jpg')}
                    style={styles.absolute}
                    onLoadEnd={this.imageLoaded.bind(this)}
                />
                <BlurView
                    style={styles.absolute}
                    viewRef={this.state.viewRef}
                    blurType="dark"
                    blurAmount={3}
                />
                <View style={{flex: 1}}>
                    <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                        <Thumbnail style={styles.innerCircle} source={require('../assets/images/logo.png')}/>
                    </View>
                    <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50}}>
                        <Item rounded style={{
                            marginBottom: 10,
                            paddingLeft: 10,
                            backgroundColor: 'rgba(255,255,255,0.2)'
                        }}>
                            <Icon active name='ios-contact-outline' size={30} color="#fff"/>
                            <Input
                                value={this.props.mobile}
                                onChangeText={this.onMobileChange.bind(this)}
                                style={{
                                    fontFamily: 'IRANSansMobile',
                                    fontSize: 14,
                                    color: '#fff',
                                    textAlign: 'right'
                                }}
                                placeholderTextColor='#fff'
                                placeholder='شماره تلفن'/>
                        </Item>
                        <LinearGradient colors={['#ee0979', '#ff6a00']}
                                        start={{x: 0, y: 1}}
                                        end={{x: 1, y: 1}}
                                        style={{
                                            height: 50,
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 25
                                        }}>
                            <TouchableOpacity onPress={this.onRegisterButtonPress.bind(this)}>
                                <Text style={{
                                    fontFamily: 'IRANSansMobile',
                                    fontSize: 14,
                                    color: '#fff',
                                }}>دریافت کد فعال سازی</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 10
                        }}>
                            <TouchableOpacity onPress={() => Actions.login()}>
                                <Text style={{
                                    fontFamily: 'IRANSansMobile',
                                    color: '#fff',
                                    fontSize: 14,
                                    paddingHorizontal: 10
                                }}>ورود</Text>
                            </TouchableOpacity>
                            <View style={{width: 1, backgroundColor: '#fff', height: 15}}></View>
                            <TouchableOpacity>
                                <Text style={{
                                    fontFamily: 'IRANSansMobile',
                                    color: '#fff',
                                    fontSize: 14,
                                    paddingHorizontal: 10
                                }}>فراموشی رمز</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {mobile, password,error} = auth;
    return {mobile, password,error};
};

export default connect(mapStateToProps, {mobileChange, passwordChange, loginUser})(Register);