import React, {Component} from 'react';
import {Button, Container, Content, Footer, FooterTab, Header, Left, Right, Text, View} from "native-base";
import {connect} from "react-redux";
import PostSwiper from "../components/PostSwiper";
import {ScrollView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {header} from "../assets/styles";
import {Actions} from 'react-native-router-flux';
import Communications from "react-native-communications";
const styles = StyleSheet.create({
    tab: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#16CA8D'
    }
});

class Post extends Component {
    componentDidMount() {

    }

    render() {
        const {post} = this.props;
        if (Object.keys(post).length !== 0) {
            console.log(post)
            return (
                <Container>
                    <Header style={header.container}>
                        <StatusBar backgroundColor="#16CA8D"/>
                        <Left style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Icon name="arrow-right" style={header.drawerIcon}/>
                            </TouchableOpacity>
                            <Text style={header.title}>{post.title}</Text>
                        </Left>
                        <Right style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Icon name="share" style={header.searchIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star" style={header.searchIcon}/>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <Content>
                        <ScrollView style={{marginBottom: 15}}>
                            <StatusBar hidden={true}/>
                            <View style={{height: 350}}>
                                <PostSwiper images={post.images}/>
                            </View>
                            <View style={{padding: 10}}>
                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderWidth: 0.2,
                                    borderColor: '#999',
                                    backgroundColor: '#fff',
                                    elevation: 1,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginVertical: 5
                                }}>
                                    <View style={{
                                        paddingVertical: 5,
                                        borderBottomWidth: 0.5,
                                        borderColor: '#999',
                                        width: '100%',
                                    }}>
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile',
                                            fontSize: 18,
                                            color: "#16CA8D",
                                            textAlign: 'left'
                                        }}>{post.title}</Text>
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        paddingVertical: 5,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Icon name="location-pin" size={20} color="#16CA8D"/>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile_Light',
                                                fontSize: 14,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}>وارمین-جوادآباد</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Icon name="clock" size={20} color="#16CA8D"/>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile_Light',
                                                fontSize: 14,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}>12 ساعت پیش </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderWidth: 0.2,
                                    borderColor: '#999',
                                    backgroundColor: '#fff',
                                    elevation: 1,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginVertical: 5
                                }}>
                                    <View style={{
                                        width: '100%',
                                        paddingVertical: 5,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile',
                                                fontSize: 18,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}>مقدار : </Text>
                                        </View>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile_Light',
                                                fontSize: 16,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}>12 تن </Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        paddingVertical: 5,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile',
                                                fontSize: 18,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}>قیمت : </Text>
                                        </View>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile_UltraLight',
                                                fontSize: 16,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}> هرمقدار 1000 تومان </Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        paddingVertical: 5,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile',
                                                fontSize: 18,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}>کشاورز : </Text>
                                        </View>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile_UltraLight',
                                                fontSize: 16,
                                                paddingRight: 5,
                                                color: '#293754'
                                            }}> علی کشتکار </Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderWidth: 0.2,
                                    borderColor: '#999',
                                    backgroundColor: '#fff',
                                    elevation: 1,
                                    padding: 10,
                                    borderRadius: 10,
                                    marginVertical: 5
                                }}>
                                    <View style={{
                                        paddingVertical: 5,
                                        width: '100%',
                                    }}>
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile',
                                            fontSize: 18,
                                            color: "#16CA8D",
                                            textAlign: 'left'
                                        }}>{post.description}</Text>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <TouchableOpacity
                                style={styles.tab}
                                onPress={() => Communications.phonecall('0123456789', true)}
                            >
                                <Icon style={{padding: 0, color: '#fff'}} name="phone" size={30}/>
                                {/*<Text style={{*/}
                                    {/*fontFamily: 'IRANSansMobile_UltraLight',*/}
                                    {/*fontSize: 13,*/}
                                    {/*color: '#fff',*/}
                                    {/*paddingTop: 7,*/}
                                    {/*textAlign: 'center'*/}
                                {/*}}> {title} </Text>*/}
                            </TouchableOpacity>
                        </FooterTab>
                    </Footer>
                </Container>
            );
        }
        return (
            <View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {post: state.banners.selectedPost}
};

export default connect(mapStateToProps)(Post);