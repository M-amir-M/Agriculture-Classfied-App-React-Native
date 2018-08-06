import React, {Component} from 'react';
import {Button, Footer, FooterTab, Form, Input, Item, Label, Picker, Text, View} from "native-base";
import {Image, ScrollView, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from "../components/Header";
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker as ImagePicker} from '../components/ImagePicker';
import {connect} from "react-redux";
import {createPostDescriptionChange, createPostTitleChange, createPostImagesChange, createPost} from "../redux/actions";
import RNFetchBlob from "react-native-fetch-blob";
import {uploader} from "../components/UploadImage";

const styles = StyleSheet.create({
    imagesSectionContainer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#16CA8D'
    },
    imagesContainer: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    imageContainerDisable: {
        width: 70,
        height: 70,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    imageTitle: {
        fontFamily: 'IRANSansMobile',
        fontSize: 16,
        color: '#fff'
    },
    imageDescription: {
        fontFamily: 'IRANSansMobile',
        fontSize: 14,
        color: '#fff'
    },
    formContainer: {
        padding: 30
    },
    label: {
        fontFamily: 'IRANSansMobile',
        fontSize: 16,
    },
    input: {
        fontFamily: 'IRANSansMobile',
        fontSize: 16,
        color: '#333',
        textAlign: 'right',
    },
    item: {
        width: '100%',
        paddingLeft: 10,
    },
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

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'key0',
        };
        this._onCreatePost.bind(this);
    }

    _showImagePicker(index) {
        ImagePicker((source, data) => {
            let images = this.props.images;
            images[index] = {source, data};
            this.props.createPostImagesChange(images);
        });
    }

    _renderImages(data, index) {
        const images = this.props.images;
        const image = data.source === null ?
            <Icon name="ios-camera" size={35} color="#16CA8D"/> :
            <Image source={data.source} style={{width: '100%', height: '100%', borderRadius: 5}}/>;

        let disableStatus = true;
        disableStatus = images[index - 1] === undefined || (images[index].source === null && images[index - 1].source !== null);
        return (
            <TouchableOpacity
                key={index}
                disabled={!disableStatus}
                onPress={() => this._showImagePicker(index)}
                style={!disableStatus ? styles.imageContainerDisable : styles.imageContainer}>
                {image}
            </TouchableOpacity>
        )
    }

    _handleCatInput() {
        Keyboard.dismiss();
        Actions.category();
    }

    _onTitleChange(title) {
        this.props.createPostTitleChange(title);
    }

    _onDescriptionChange(description) {
        this.props.createPostDescriptionChange(description);
    }

    _onCreatePost() {
        const {title, description,api_token} = this.props;
        const category = this.props.category.id;
        const images = this.props.images.reduce((total, item) => {
            if (item.data !== null)
                total.push({data:item.data});
            return total;
        }, []);

        // // create formdata
        // const data = new FormData();
        // data.append('title', title);
        // data.append('description', description);
        // data.append('category', category);
        // images.forEach((image, index) => {
        //     data.append('images', {
        //         uri: image.uri,
        //         type: 'image/jpeg',
        //         name: 'image'+index
        //     });
        // });

        // uploader([{title, description, category, data:RNFetchBlob.wrap(images[0].uri),api_token}])
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
        this.props.createPost({title, description, category, images,api_token});
    }

    render() {
        const {title, description, category, images} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Header status="createPost" title="ایجاد آگهی"/>
                <ScrollView>
                    <View style={styles.imagesSectionContainer}>
                        <Text style={styles.imageTitle}>تصویری برای آگهی خود انتخاب کنید.</Text>
                        <Text style={styles.imageDescription}>آگهی های عکس دار چند برابر بیشتر در دید می باشند.</Text>
                        <View style={styles.imagesContainer}>
                            {images.map(this._renderImages.bind(this))}
                        </View>
                    </View>
                    <View style={styles.formContainer}>
                        <Form>
                            <Item floatingLabel style={styles.item}>
                                <Label style={{fontFamily: 'IRANSansMobile'}}>عنوان</Label>
                                <Input
                                    onChangeText={this._onTitleChange.bind(this)}
                                    value={title}
                                    style={styles.input}/>
                            </Item>
                            <Item floatingLabel style={styles.item}>
                                <Label style={{fontFamily: 'IRANSansMobile'}}>توضیحات</Label>
                                <Input
                                    onChangeText={this._onDescriptionChange.bind(this)}
                                    value={description}
                                    style={styles.input}/>
                            </Item>
                            <Item floatingLabel style={styles.item}>
                                <Label style={{fontFamily: 'IRANSansMobile'}}>دسته بندی</Label>
                                <Input
                                    value={category.name}
                                    onFocus={this._handleCatInput.bind(this)}
                                    style={styles.input}/>
                            </Item>
                        </Form>
                    </View>
                </ScrollView>

                <Footer>
                    <FooterTab>
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => this._onCreatePost()}
                        >
                            <Text style={{
                                fontFamily: 'IRANSansMobile_UltraLight',
                                fontSize: 20,
                                color: '#fff',
                                paddingTop: 7,
                                textAlign: 'center'
                            }}> ثبت آگهی </Text>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const mapStateToProps = ({banners,auth}) => {
    const {title, description, category, images, changeStatus} = banners.newPost;
    const {api_token} = auth.user;
    return {title, description, category, images, changeStatus,api_token};
};

export default connect(mapStateToProps, {
    createPostTitleChange,
    createPostDescriptionChange,
    createPostImagesChange,
    createPost
})(CreatePost);