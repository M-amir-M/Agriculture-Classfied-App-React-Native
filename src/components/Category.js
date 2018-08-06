import React, {Component} from 'react';
import BaseLightbox from "./BaseLightbox";
import {connect} from "react-redux";
import {Button, Left, List, ListItem, Right, Text, View} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {LayoutAnimation, UIManager} from 'react-native';
import {createPostCategoryChange} from "../redux/actions";

const globalCats = [
    {
        id: 1,
        name: ' محصولات باغی',
        parent: 0,
    },
    {
        id: 2,
        name: ' محصولات کشاورزی',
        parent: 0,
    },
    {
        id: 3,
        name: ' محصولات دامی',
        parent: 0,
    },
    {
        id: 4,
        name: 'تجهیزات کشاورزی',
        parent: 0,
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
        parent: 6,
    },
    {
        id: 10,
        name: 'جو',
        parent: 6,
    },
];

class Category extends Component {
    constructor(props) {
        super(props);
        this._getParentSibling.bind(this);
        this.state = {
            categories: globalCats.filter((category) => category.parent === 0)
        }
    }

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    _selectCategory(id) {
        const categories = globalCats.filter((category) => category.parent === id);
        if (categories.length > 0){

            this.setState({
                categories
            });
        }
        else{
            const category = globalCats.find((category) => category.id === id);
            this.props.createPostCategoryChange(category);
            this.baseLightBox.close();
        }
    }

    _getParentSibling() {
        let parent = globalCats.filter((category) => category.id = this.state.categories[0].parent);
        console.log(parent);
        // const parent = globalCats.filter((category) => category.parent === 0);
        this._selectCategory(0)
    }

    _renderCategoriesItem(item) {
        const children = globalCats.filter((category) => category.parent === item.id);
        return (
            <ListItem key={item.id} style={{justifyContent: 'space-between'}}
                      onPress={() => this._selectCategory(item.id)}>
                <Text style={{fontFamily: 'IRANSansMobile'}}>{item.name}</Text>
                {children.length > 0 ? <Icon name="ios-arrow-back" style={{fontSize: 25}}/> : null}
            </ListItem>
        )
    }

    render() {
        return (
            <BaseLightbox ref={instance => {
                this.baseLightBox = instance;
            }} verticalPercent={0.8} horizontalPercent={0.8}>
                <View style={{
                    width: '100%',
                    height: 50,
                    paddingHorizontal: 10,
                    backgroundColor: '#16CA8D',
                    borderTopStartRadius: 4,
                    borderTopEndRadius: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Button transparent onPress={() => this.baseLightBox.close() }>
                        <Icon name='ios-close' style={{fontSize: 35, color: '#fff'}}/>
                    </Button>
                    <Text style={{fontFamily: 'IRANSansMobile', fontSize: 15, color: '#fff'}}>انتخاب دسته بندی</Text>
                    <Button transparent onPress={() => this._getParentSibling() }>
                        <Icon name='ios-arrow-round-back' style={{fontSize: 35, color: '#fff'}}/>
                    </Button>
                </View>
                <List style={{width: '100%', padding: 10}}>
                    {this.state.categories.map(this._renderCategoriesItem.bind(this))}
                </List>

            </BaseLightbox>
        );
    }
}


export default connect(null,{createPostCategoryChange})(Category)