import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import {Text, View} from "native-base";


export default class ListItem extends Component {
    render() {
        const {active, iconName, title} = this.props;
        backColor = active ? '#777' : 'rgba(0,0,0,0)';
        return (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: backColor,
                    height: 50,
                    paddingLeft: 10,
                    borderColor:'#16CA8D',
                    borderLeftWidth: active ? 5 : 0
                }}>
                    <Icon name={iconName} size={20} color="#fff" style={{paddingLeft: 10}}/>
                    <Text style={{fontFamily: 'IRANSansMobile', fontSize: 16, color: '#fff'}}>{title}</Text>
                </View>
        );
    }
}