import React, {Component} from 'react';
import {Content, Header, Left, Right, Text, View} from "native-base";
import {Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, PanResponder, Animated} from "react-native";
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import Tag from "../components/Tag";
import {header} from "../assets/styles";
import {Actions} from 'react-native-router-flux';
import ProductCard from "../components/ProductCard";
import home from "../assets/styles/home";


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        flex: 1,
        alignItems: 'center',
        marginVertical: 40,
        borderRadius: 15,
        height: 'auto',
        width: '90%',
        position: 'relative',
        padding: 15,
    },
    thumbnailContainer: {
        position: 'absolute',
        width: 100,
        height: 100,
        elevation: 15
    },
    name: {
        fontFamily: 'IRANSansMobile_Bold',
        fontSize: 15,
        color: '#555'
    },
    header: {
        backgroundColor: 'rgba(52, 52, 52, 0)',

        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0
    },
    headerContainer: {
        height: 40,
        opacity: 1
    }
});


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            posts: [
                {
                    id: 1,
                    title: 'انار',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/anar.jpg'),
                },
                {
                    id: 2,
                    title: 'سیب',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/apple.jpg'),
                },
                {
                    id: 3,
                    title: 'آووکادو',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/avocado.jpg'),
                },
                {
                    id: 4,
                    title: 'موز',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/bnana.jpg'),
                },
                {
                    id: 5,
                    title: 'انگور',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/grip.jpg'),
                },
                {
                    id: 6,
                    title: 'هندوانه',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/melon.jpg'),
                },
                {
                    id: 7,
                    title: 'طالبی',
                    description: 'انار تازه و درشت باغ های ساوه',
                    thumbnail: require('../assets/images/talebi.jpg'),
                },
            ]
        };
    }


    _renderProduct(post) {
        console.log(1);
        if (Object.keys(post).length !== 0)
            return (
                    <ProductCard
                        key={post.id}
                        title={post.title}
                        thumbnail={post.thumbnail}
                        description={post.description}/>
            )
    }

    render() {
        const {user} = this.props;
        const thumbnail = user !== null ? {uri: user.thumbnail} : require('../assets/images/avatar.png');
        const name = user !== null ? user.name : 'لطفا وارد شوید.';

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [40, 0],
            extrapolate: 'clamp',
        });
        const headerOpacity = this.state.scrollY.interpolate({
            inputRange: [0, 20],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        return (
            <LinearGradient colors={['#16CA8D', '#3ae374']}
                            start={{x: 1, y: 0}}
                            end={{x: 1, y: 1}}
                            style={{
                                flex: 1
                            }}>
                <Animated.View style={[styles.headerContainer, {opacity: headerOpacity, height: headerHeight}]}>
                    <Header style={styles.header}>
                        <StatusBar backgroundColor="#16CA8D"/>
                        <Left style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Icon name="ios-arrow-round-forward-outline" style={{marginRight: 5}} size={30}/>
                            </TouchableOpacity>
                            <Text style={header.title}>پروفایل</Text>
                        </Left>
                        <Right style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                            {/*<TouchableOpacity onPress={this.showSearch.bind(this)}>*/}
                            {/*<Icon name="share" style={header.searchIcon}/>*/}
                            {/*</TouchableOpacity>*/}
                            {/*<TouchableOpacity onPress={this.toggleDrawer}>*/}
                            {/*<Icon name="star" style={header.searchIcon}/>*/}
                            {/*</TouchableOpacity>*/}
                        </Right>
                    </Header>
                </Animated.View>
                <ScrollView scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                            )}>
                    <View style={{alignItems: 'center', marginTop: 50}}>
                        <View style={styles.cardContainer}>
                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Icon color="#777" name="ios-heart-outline" size={25}/>
                                <Tag color="#fff" fontSize={10} backgroundColor="#293754" text="کشاورز"/>
                            </View>
                            <View style={{marginTop: 25}}>
                                <Text style={styles.name}>{name}</Text>
                            </View>
                            <View style={{flexDirection: 'column', width: 300, height: 'auto'}}>
                                <View>
                                    <View style={home.headerTitle}>
                                    <Text style={home.title}>آگهی های من</Text>
                                    <View style={home.allArrow}>
                                    <Text style={{color: '#16CA8D', fontSize: 18}}>همه</Text>
                                    <Icon name="ios-arrow-back-outline" color='#16CA8D' size={17}/>
                                    </View>
                                    </View>
                                    {this.state.posts.map(this._renderProduct.bind(this))}
                                </View>
                            </View>
                        </View>
                        <Animated.View style={[styles.thumbnailContainer,{}]}>
                            <Image source={thumbnail} style={{
                                borderRadius: 10,
                                width: '100%',
                                height: '100%'
                            }}/>
                        </Animated.View>
                    </View>

                </ScrollView>
            </LinearGradient>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {user} = auth;
    return {user};
};

export default connect(mapStateToProps)(Profile);