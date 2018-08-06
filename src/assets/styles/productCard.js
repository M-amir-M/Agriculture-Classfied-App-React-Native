import EStyleSheet from "react-native-extended-stylesheet";

export const productCard = EStyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        width:'100%',
    },
    card:{
        borderRadius:10,
        height:150,
        elevation:10
    },
    cardItem:{
        borderRadius:10,
        flexDirection:'row',
        alignItems:'flex-start',
        height:'100%',
        position:'relative',
    },
    background:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        height: 150,
        position:'absolute',
    },
    image:{
        width: '50%',
        height: 150,
        borderRadius:10,
    },
    texts:{
        margin:20,
        flexDirection:'column',
    },
    title:{
        color: '#777',
        fontFamily: 'IRANSansMobile',
        fontSize: 30,
    },
    description:{
        color: '#444',
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    }
});

export const productCard1 = EStyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        width:'100%',
    },
    card:{
        borderRadius:10,
        height:150,
        elevation:10
    },
    cardItem:{
        borderRadius:10,
        flexDirection:'row',
        alignItems:'flex-start',
        height:'100%',
        position:'relative',
    },
    background:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        height: 150,
        position:'absolute',
    },
    image:{
        width: '50%',
        height: 150,
        borderRadius:10,
    },
    texts:{
        margin:20,
        flexDirection:'column',
    },
    title:{
        color: '#777',
        fontFamily: 'IRANSansMobile',
        fontSize: 30,
    },
    description:{
        color: '#444',
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    }
});

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $greenColor: '#16CA8D',
    $darkColor: '#293754',
});

