import RNFetchBlob from 'react-native-fetch-blob';
import {baseUrl} from "../consts";

export const uploader = (data) => {
    console.log(data)
    return RNFetchBlob.fetch('POST' ,  `${baseUrl}/posts`, {
        'Content-Type' : 'multipart/form-data',
        Accept: 'application/json',
        Authorization : `Bearer ${data[0].api_token}`,
    }, data);
};
