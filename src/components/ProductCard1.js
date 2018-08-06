import React, {Component} from 'react';
import {Card, CardItem, Text, View} from "native-base";
import {Image} from "react-native";
import {card2 as styles} from '../assets/styles';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Tag from "./Tag";

export default class ProductCard2 extends Component {
    render() {
        const {title, thumbnail, description} = this.props;

        return (
            <View style={styles.card}>
                <Image source={{uri : thumbnail}} style={styles.image}/>
                <View style={styles.infoSection}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="location-pin" style={styles.infoIcon}/>
                        <Text style={styles.locationText}>تهران , ورامین جوادآباد</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="clock" style={styles.infoIcon}/>
                        <Text style={styles.timeText}>یک ساعت پیش</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Tag fontSize={12} text="1000 کیلو"/>
                        <Tag fontSize={12} backgroundColor="#293754" text="1000 تومان"/>
                    </View>
                </View>
            </View>
        );
    }
}