import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    PixelRatio,
} from 'react-native';
import React, {
    Component} from 'react';

import {Router, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {

    render() {
        var color =  '#301c2a';

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
                <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
            </View>
        );
    }
}

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
            <View style={{
                flex: 1,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text>Settings</Text>
            </View>
        );
    }
}

//MyApp Main Class
export default class Test extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Router>
                    <Scene key="root">
                            <Scene key="main" tabs={true} tabBarPosition='bottom' tabBarStyle={styles.tabBar} default="tab1">
                                <Scene  key="tab1"
                                        title="MyTab"
                                        iconName="tags"
                                        icon={TabIcon}
                                        hideNavBar={true}
                                        component={Tags}
                                        initial={true}
                                />
                                <Scene  key="NewsFeed"
                                        title="MainNewssFed"
                                        iconName="newspaper-o"
                                        icon={TabIcon}
                                        hideNavBar={true}
                                        component={NewsFeed}
                                />

                                <Scene  key="settings"
                                        iconName="gear"
                                        icon={TabIcon}
                                        hideNavBar={true}
                                        title='settings'
                                        component={Settings} />
                            </Scene>
                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
});