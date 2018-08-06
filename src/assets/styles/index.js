import EStyleSheet from "react-native-extended-stylesheet";

export const drawer = EStyleSheet.create({
    container :{
        flex: 1,
    },
    imageHeader : {
        height : 180 ,
        width : '100%'
    },
    item : {
        justifyContent: 'flex-end' ,
        padding: 10
    },
    itemTitle : {
        fontFamily : '$ISFont'
    },
    itemIcon : {
        marginLeft: 10
    }
});

export const header = EStyleSheet.create({
    container: {
        backgroundColor: "$greenColor",
        height: 'auto',
        padding:10,
        paddingTop:15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    drawerIcon:{
        fontSize:22,
        color:'$darkColor',
        paddingLeft:15
    },
    title:{
        fontSize:18,
        color:'$darkColor',
        fontFamily:'$ISFont',
        paddingLeft:15
    },
    newBanner:{
        fontSize:18,
        color:'$darkColor',
        fontFamily:'$ISFont',
        paddingRight:15
    },
    searchIcon:{
        fontSize:22,
        color:'$darkColor',
        paddingRight:15
    },
    headerSearch: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        width: '100%',
        margin:0
    },
    searchBox:{
        height:40,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius:10
    },
    searchBoxButtons:{
        height:40,
        width: '10%',
        alignItems:'flex-start'
    },
    searchBoxInput:{
        fontSize: 15,
        fontFamily: '$ISFont',
        width: '100%',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        textAlign:'right'
    },
    searchBoxIcon:{
        height : '100%',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        padding:10,
        paddingTop:10,
        fontSize: 20,
        backgroundColor: '#fff',
    },
    searchBoxButtonsIcon:{
        height : '100%',
        paddingTop:10,
        fontSize: 20,
    }
});

export const home = EStyleSheet.create({
    container: {
        flex:1,
        padding:10,
        backgroundColor:'#eee'
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:15,
        paddingBottom:10,
        width:'100%',
    },
    allArrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '$darkColor',
        fontFamily: '$ISFont'
    },
});

export const card1 = EStyleSheet.create({
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
        fontFamily: '$ISFont',
        fontSize: 30,
    },
    description:{
        color: '#444',
        fontFamily: '$ISFont',
        fontSize: 15,
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    }
});

export const card2 = EStyleSheet.create({
    card:{
        flex: 1,
        flexDirection:'row',
        marginBottom:10,
        borderRadius:10,
        height:140,
        width:'100%',
        borderWidth: 0.1,
        borderColor: '#999',
        backgroundColor:'#fff',
        elevation:1,
    },
    image:{
        height: 130,
        width: 130,
        margin:5,
        borderRadius:10,
    },
    infoSection:{
        flexDirection:'column',
        alignItems:'flex-start',
        height:'100%',
        padding:15
    },
    title:{
        color: '#333',
        fontFamily: '$ISFont',
        fontSize: 16,
        paddingBottom:10
    },
    locationText:{
        color: '#777',
        fontFamily: '$ISFont',
        fontSize: 14,
    },
    timeText:{
        color: '#777',
        fontFamily: '$ISFont',
        fontSize: 12,
    },
    infoIcon:{
        fontSize:17,
        color:'#333',
        paddingLeft:10
    },


    description:{
        color: '#444',
        fontFamily: '$ISFont',
        fontSize: 15,
        textShadowColor: '#fff',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    }
});

EStyleSheet.build({
    $greenColor: '#16CA8D',
    $darkColor: '#293754',
    $ISFont: 'IRANSansMobile',
});

