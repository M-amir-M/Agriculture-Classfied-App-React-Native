import React, {Component} from 'react';
import {Card, CardItem, Container, List, ListItem, Text, View} from "native-base";
import {Dimensions, FlatList, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import Header from "../components/Header";
import MainTabBar from "../components/tabs/MainTabBar";
import Icon from 'react-native-vector-icons/Ionicons';
import ProductCard1 from "../components/ProductCard1";
import {getPosts, getSelectPost} from '../redux/actions';
import {connect} from "react-redux";
import {Actions} from 'react-native-router-flux';

const search = [];
const globalCats = [
    {
        id: 1,
        name: ' محصولات باغی',
        parent: 0,
        thumbnail: require('../assets/images/anar.jpg')
    },
    {
        id: 2,
        name: ' محصولات کشاورزی',
        parent: 0,
        thumbnail: require('../assets/images/talebi.jpg')
    },
    {
        id: 3,
        name: ' محصولات دامی',
        parent: 0,
        thumbnail: require('../assets/images/dami.jpg')
    },
    {
        id: 4,
        name: 'تجهیزات کشاورزی',
        parent: 0,
        thumbnail: require('../assets/images/tajhizat.jpg')

    },
    {
        id: 5,
        name: 'صیفی جات',
        parent: 2,
    },
    {
        id: 6,
        name: 'غلات',
        parent: 2,
    },
    {
        id: 7,
        name: 'هندوانه',
        parent: 5,
    },
    {
        id: 8,
        name: 'طالبی',
        parent: 5,
    },
    {
        id: 9,
        name: 'ذرت',
        parent: 1,
    },
    {
        id: 10,
        name: 'جو',
        parent: 3,
    },
];
const {width, height} = Dimensions.get('window');

class CategoryFilter extends Component {
    constructor(props) {
        super(props);
        this._renderCat.bind(this);
        this.state = {
            categories: globalCats.filter((category) => category.parent === 0)
        }
    }

    _chunk(array, size) {
        var results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        return results;
    };

    _renderRowItem(item) {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {item.map(this._renderColItem.bind(this))}
            </View>
        );
    }

    _renderColItem(item) {
        return (
            <TouchableOpacity key={item.id} style={{
                width: '50%',
                height: width / 3,
                margin: 5,
                borderColor: '#ddd',
                backgroundColor: '#fff',
                borderWidth: 1,
                elevation: 2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10
            }}
                              onPress={() => {
                                  this._selectCategory(item.id)
                              }}
            >
                <Image
                    style={{
                        width: '80%',
                        height: '80%',
                    }}
                    imageStyle={{borderRadius: 10}}
                    source={item.thumbnail}/>
                <Text style={{
                    padding: 5,
                    textAlign: 'center',
                    fontFamily: 'IRANSansMobile',
                    color: '#333',
                    textShadowColor: '#fff',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 1
                }}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    _selectCategory(id) {
        const categories = globalCats.filter((category) => category.parent === id);

        if (categories.length > 0) {
            this.setState({
                categories
            });
        }
        else {
            const category = globalCats.find((category) => category.id === id);
        }
    }

    _renderSubCat(item) {
        const children = globalCats.filter((category) => category.parent === item.id);
        return (
            <ListItem key={item.id}
                      style={{justifyContent: 'space-between', backgroundColor: '#fff', marginLeft: 0, padding: 5}}
                      onPress={() => this._selectCategory(item.id)}>
                <Text style={{fontFamily: 'IRANSansMobile'}}>{item.name}</Text>
                {children.length > 0 ? <Icon name="ios-arrow-back" style={{fontSize: 25}}/> : null}
            </ListItem>
        )
    }

    _renderCat() {
        let isSubCat = false;
        if (this.state.categories[0])
            isSubCat = this.state.categories[0].parent === 0 ? false : true;
        if (this.state.categories[0] && isSubCat) {
            this.props.getPosts({filter_page: 1,cats:this.state.categories});

            return (
                <ScrollView>
                    <List style={{backgroundColor: '#000', paddingRight: 0}}>
                        {this.state.categories.map(this._renderSubCat.bind(this))}
                    </List>
                    <View style={{padding:10}}>
                        <FlatList
                            data={this.props.posts}
                            renderItem={({item}) => this._renderProduct(item)}
                            keyExtractor={(item, index) => index.toString()}
                            // ListEmptyComponent={() => <Loading color="#16CA8D"/>}
                            onEndReached={() => this._handleLoadMore()}
                            onEndReachedThreshold={0.1}/>
                    </View>
                </ScrollView>
            );
        }
        const chunk = this._chunk(this.state.categories, 2);
        return (
            <View style={{flexDirection: 'column'}}>
                {chunk.map(this._renderRowItem.bind(this))}
            </View>
        );
    }

    _renderProduct(post) {
        return (
            <TouchableOpacity key={post.id} onPress={() => this._transferPostScreen(post.id)}>
                <ProductCard1
                    key={post.id}
                    title={post.title}
                    thumbnail={post.thumbnail}
                    description={post.description}/>
            </TouchableOpacity>
        )
    }

    _transferPostScreen(post_id) {
        this.props.getSelectPost(post_id);
        Actions.push('post');
    }

    _handleLoadMore() {

        const {getPosts, filter_page, posts} = this.props;
        if (posts.length > 0) {
            getPosts({filter_page: filter_page + 1,cats:this.state.categories});
        }
    }

    render() {
        return (
            <Container>
                <Header status="main" title="کشتمند"/>
                <View style={{flex: 1}}>
                    {this._renderCat()}
                </View>
                <MainTabBar/>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {posts: state.banners.filter_posts, filter_page: state.banners.filter_page};
};

export default connect(mapStateToProps, {getPosts, getSelectPost})(CategoryFilter);

