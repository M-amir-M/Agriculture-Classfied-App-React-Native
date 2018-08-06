import React,{Component} from 'react';
import {Text, View} from "native-base";


export default  class Tag extends Component{
    render(){
        const {text,color,backgroundColor,fontSize} = this.props;
        return(
                <Text style={{
                    fontSize:fontSize||12,
                    color:color || '#fff',
                    backgroundColor:backgroundColor||'#16CA8D',
                    borderRadius:5,
                    paddingHorizontal:5,
                    marginRight:5,
                    fontFamily:'IRANSansMobile'
                }}>{text}</Text>
        )
    }
}
