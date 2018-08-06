import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container: {
        padding:20,
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
        fontFamily: 'IRANSansMobile'
    },
});

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $greenColor: '#16CA8D',
    $darkColor: '#293754',
});

export default styles;
