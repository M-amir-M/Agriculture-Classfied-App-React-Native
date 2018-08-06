import React, {Component} from 'react';
import {Card, CardItem, Text, View} from "native-base";
import {Image} from "react-native";
import { card1 } from '../assets/styles';

export default class ProductCard extends Component {
    render() {
        const {title,thumbnail,description} = this.props;

        return (
            <View style={card1.container}>
                <Card style={card1.card}>
                    <CardItem style={card1.cardItem} cardBody>
                        <View style={card1.background}>
                            <Text> </Text>
                            <Image source={thumbnail}
                                   style={card1.image}/>
                        </View>
                        <View style={card1.texts}>
                            <Text style={card1.title}>{title}</Text>
                            <Text style={card1.description}>{description}</Text>
                        </View>
                    </CardItem>
                </Card>
            </View>
        );
    }
}