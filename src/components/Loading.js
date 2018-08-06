import React, {Component} from 'react';
import {Spinner, Text, View} from "native-base";
import LinearGradient from "react-native-linear-gradient";

export default class Loading extends Component {
    render() {
        const {color} = this.props;
        return (
            <View style={{flex: 1}}>
                <LinearGradient colors={['#16CA8D', '#16CA8D', '#3ae374']}
                                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{
                            fontFamily: 'IRANSansMobile_UltraLight',
                            fontSize: 16,
                            color: color,
                        }}> در حال بارگزاری... </Text>
                        <Spinner color={color}/>
                </LinearGradient>
            </View>
        )
    }
}