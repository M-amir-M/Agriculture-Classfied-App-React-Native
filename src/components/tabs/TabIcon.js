import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { Text, View} from "native-base";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#16CA8D'
    }
});

export default class TabIcon extends Component {
    render() {
        const {active, iconName, title} = this.props;
        const color = active ? '#ffffff' : '#293754';
        const iconSize = active ? 20 : 30;
        if (active)
            return (
                <View
                    style={styles.container}
                >
                    <Icon style={{padding: 0, color: color}} name={iconName} size={iconSize}/>
                    <Text style={{
                        fontFamily: 'IRANSansMobile_UltraLight',
                        fontSize: 15,
                        color: color,
                        textAlign: 'center'
                    }}> {title} </Text>
                </View>
            );
        return (
            <View
                style={styles.container}
            >
                <Icon style={{padding: 0, color: color}} name={iconName} size={iconSize}/>
            </View>
        );
    }
}


