import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {header} from '../assets/styles';
import {Input, Header as NativeHeader, Item, Left, Right} from "native-base";
import {Actions} from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import {connect} from "react-redux";
import {termChanged} from '../redux/actions'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.status,
            title: this.props.title,
        }
    }

    showSearch() {
        this.setState({
            status: 'search'
        })
    }

    showHeader() {
        this.setState({
            status: 'main'
        })
    }

    toggleDrawer() {
        Actions.drawerOpen()
    }

    onTermChange(text) {
        this.props.termChanged(text);
    }

    renderHeader() {
        switch (this.state.status) {
            case 'search':
                return (
                    <NativeHeader style={header.container}>
                        <StatusBar backgroundColor="#16CA8D"/>
                        <View style={header.headerSearch}>
                            <View style={header.searchBoxButtons}>
                                <TouchableOpacity onPress={this.showHeader.bind(this)}>
                                    <Icon active name='close' style={header.searchBoxButtonsIcon}/>
                                </TouchableOpacity>
                            </View>
                            <Item style={header.searchBox}>
                                <TouchableOpacity onPress={this.showHeader.bind(this)}>
                                    <Icon active name='magnifier' style={header.searchBoxIcon}/>
                                </TouchableOpacity>
                                <Input
                                    placeholder='جستجو...'
                                    onChangeText={this.onTermChange.bind(this)}
                                    value={this.props.term}
                                    style={header.searchBoxInput}/>
                            </Item>
                        </View>
                    </NativeHeader>
                );
            case 'createPost':
                return (
                    <NativeHeader style={header.container}>
                        <StatusBar backgroundColor="#16CA8D"/>
                        <Left style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Icon name="arrow-right" style={header.drawerIcon}/>
                            </TouchableOpacity>
                        </Left>
                        <Right style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                        {/*<TouchableOpacity onPress={this.showSearch.bind(this)}>*/}
                        {/*<Icon name="share" style={header.searchIcon}/>*/}
                        {/*</TouchableOpacity>*/}
                        {/*<TouchableOpacity onPress={this.toggleDrawer}>*/}
                        {/*<Icon name="star" style={header.searchIcon}/>*/}
                        {/*</TouchableOpacity>*/}
                        </Right>
                    </NativeHeader>
                );
            case 'profile':
                return (
                    <NativeHeader style={{
                        backgroundColor: 'rgba(52, 52, 52, 0)',
                        height: 'auto',
                        paddingVertical: 10,
                        paddingTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation:0
                    }}>
                        <StatusBar backgroundColor="#16CA8D"/>
                        <Left style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Icon name="arrow-right" style={header.drawerIcon}/>
                            </TouchableOpacity>
                        </Left>
                        <Right style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                        {/*<TouchableOpacity onPress={this.showSearch.bind(this)}>*/}
                        {/*<Icon name="share" style={header.searchIcon}/>*/}
                        {/*</TouchableOpacity>*/}
                        {/*<TouchableOpacity onPress={this.toggleDrawer}>*/}
                        {/*<Icon name="star" style={header.searchIcon}/>*/}
                        {/*</TouchableOpacity>*/}
                        </Right>
                    </NativeHeader>
                );
            case 'main':
                return (
                    <NativeHeader style={header.container}>
                        <StatusBar backgroundColor="#16CA8D"/>
                        <Left style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={this.toggleDrawer}>
                                <Icon name="menu" style={header.drawerIcon}/>
                            </TouchableOpacity>
                            <Text style={header.title}>{this.state.title}</Text>
                        </Left>
                        <Right style={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={this.showSearch.bind(this)}>
                                <Icon name="magnifier" style={header.searchIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.createPost()}>
                                <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
                                                 style={header.newBanner}>آگهی جدید</Animatable.Text>
                            </TouchableOpacity>
                        </Right>
                    </NativeHeader>
                );
            default:
                return (
                    <View>

                    </View>
                );
        }


    }

    render() {
        return this.renderHeader();
    }
}

const mapStateToProps = ({filter}) => {
    const {term} = filter;
    return {term};
};

export default connect(mapStateToProps, {termChanged: termChanged})(Header);
