import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from "native-base";
const styles = StyleSheet.create({
    wrapper: {
        height:'100%'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})


export default class PostSwiper extends Component {
    _renderImageItem(image) {
        return (
            <View key={image.id} style={styles.slide1}>
                <Image source={{uri : image.image}} style={{width:'100%' ,height:'100%'}}/>
            </View>
        );
    }

    render() {
        const {images} = this.props;
        if (images)
            return (
                <View style={{flex: 1}}>
                    <Swiper style={styles.wrapper} showsButtons={false}>
                    {images.map(this._renderImageItem.bind(this))}
                    </Swiper>
                </View>
            );
        return(
            <View></View>
        )
    }
}