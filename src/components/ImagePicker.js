import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the README...just some common use cases shown here
const options = {
    title: 'انتخاب تصویر آگهی',
    takePhotoButtonTitle : 'دوربین',
    chooseFromLibraryButtonTitle : 'انتخاب از گالری',
    cancelButtonTitle : 'انصراف',
    mediaType:'photo',
    allowsEditing:true,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */
export const Picker = (callback) => {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            callback(source , response.data);
        }
    });
}