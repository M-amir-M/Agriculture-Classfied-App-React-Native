import React, {Component} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {home} from '../assets/styles';
import {getPosts, getSelectPost} from '../redux/actions';
import ProductCard1 from "../components/ProductCard1";
import MainTabBar from "../components/tabs/MainTabBar";
import {Actions} from "react-native-router-flux";
import Header from "../components/Header";
import {Container, Content} from "native-base";
import Loading from "../components/Loading";
import * as Animatable from 'react-native-animatable';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoadStatus: true
        };
        this._transferPostScreen.bind(this);
        this._handleLoadMore.bind(this);
    }

    componentDidMount() {
        this.props.getPosts({page:1});
    }

    _renderProduct(post) {
        return (
            <TouchableOpacity onPress={() => this._transferPostScreen(post.id)}>
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
        const {getPosts, page, posts} = this.props;
        if (posts.length > 0) {
            getPosts({page : page + 1});
        }
    }

    render() {
        return (
            <Container>
                <Header status="main" title="کشتمند"/>
                <View style={home.container}>
                    {/*<View style={home.headerTitle}>*/}
                    {/*<Text style={home.title}>محصولات</Text>*/}
                    {/*<View style={home.allArrow}>*/}
                    {/*<Text style={{color: '#16CA8D', fontSize: 18}}>همه</Text>*/}
                    {/*<Icon name="arrow-left" color='#16CA8D'/>*/}
                    {/*</View>*/}
                    {/*</View>*/}
                    <View>
                        <FlatList
                            data={this.props.posts}
                            renderItem={({item}) => this._renderProduct(item)}
                            keyExtractor={(item, index) => index.toString()}
                            // ListEmptyComponent={() => <Loading color="#16CA8D"/>}
                            onEndReached={() => this._handleLoadMore()}
                            onEndReachedThreshold={0.5}
                            extraData={this.state}/>
                        {/*{this.state.posts.map(this._renderProduct.bind(this))}*/}
                    </View>
                </View>
                <MainTabBar/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.banners.posts, page: state.banners.page};
};

export default connect(mapStateToProps, {getPosts, getSelectPost})(Home);

