import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container: {
        backgroundColor: "$darkColor",
        height: 120,
        paddingRight:20,
        paddingLeft:20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
        shadowColor: '#000000',

    },
    headerSearch: {
        marginTop:15
    },
    title: {
        fontSize: 25,
        color: '$greenColor',
        fontFamily: 'IRANSansMobile'
    },
    searchBox:{
        width: '100%',
        height:40,
        backgroundColor: '#fff',
        borderRadius:10
    },
    searchBoxInput:{
        fontSize: 15,
        fontFamily: 'IRANSansMobile',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        textAlign:'right'
    },
    searchBoxIcon:{
        height : '100%',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        padding:15,
        paddingTop:10,
        fontSize: 15,
        backgroundColor: '#fff',
    }
});

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $greenColor: '#16CA8D',
    $darkColor: '#293754',
});

export default styles;
