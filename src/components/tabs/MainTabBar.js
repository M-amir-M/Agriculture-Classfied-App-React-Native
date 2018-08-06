import React, {Component} from 'react';
import {Button, Footer, FooterTab,} from "native-base";
import TabIcon from "./TabIcon";
import {Actions} from 'react-native-router-flux';
import {TouchableOpacity,StyleSheet} from "react-native";


const styles = StyleSheet.create({
    tab: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16CA8D'
    }
});

export default class MainTabBar extends Component {
    render() {
        const scene = Actions.currentScene;
        return (
            <Footer>
                <FooterTab>
                    <Button style={styles.tab} onPress={()=> Actions.home()}>
                        <TabIcon iconName="home" active={scene == 'home'} title="صفحه اصلی" tabKey="home"/>
                    </Button>
                    <Button style={styles.tab} onPress={()=> Actions.categoryFilter()}>
                        <TabIcon iconName="list" active={scene == 'categoryFilter'} title="دسته بندی" tabKey="categoryFilter"/>
                    </Button>
                    <Button style={styles.tab} onPress={()=> Actions.product()}>
                        <TabIcon iconName="bag" active={scene == 'product'} title="خرید" tabKey="product"/>
                    </Button>
                    <Button style={styles.tab} onPress={()=> Actions.profile()}>
                        <TabIcon iconName="user" active={scene == 'profile'} title="پروفایل" tabKey="profile"/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

