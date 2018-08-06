import React from 'react';
import { Animated , Dimensions ,StyleSheet} from 'react-native';
import {View, Button, Text, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
const { height : deviceHeight , width : deviceWidth} = Dimensions.get('window');


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'rgba(52,52,52,.5)',
        position: 'absolute',
        top : 0 ,
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class BaseLightbox extends React.Component {
    constructor(props) {
        super(props);
        this.close.bind(this);
        this.state = {
            opacity : new Animated.Value(0)
        }
    }

    componentWillMount() {
        Animated.timing(this.state.opacity,{
            toValue : 1,
            duration : 200
        }).start();
    }

    close() {
        Animated.timing(this.state.opacity,{
            toValue : 0,
            duration : 200
        }).start(Actions.pop);
    }

    _renderLightbox() {
        const { children , verticalPercent = 1 , horizontalPercent = 1 } = this.props;
        let width = verticalPercent ? deviceWidth * verticalPercent : deviceWidth;
        let height = horizontalPercent ? deviceHeight * horizontalPercent : deviceHeight;
        height = 'auto';
        return (
            <View style={{ width , height, justifyContent: 'center' , alignItems: 'center' , backgroundColor : 'white' , borderRadius : 4}}>
                {children}
            </View>
        )
    }

    render() {
        return (
            <Animated.View style={[styles.container , { opacity : this.state.opacity }]}>
                {this._renderLightbox()}
            </Animated.View>
        )
    }

}


