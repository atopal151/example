//import libraries

import React from 'react';
import {Text,View} from 'react-native';

//create component

const Header= (props)=>{
    const {textStyling,viewStyle}=styles;
    
    return (
    <View style={viewStyle}>
        <Text style={textStyling}>{props.title}</Text>
    </View>
    );
}

const styles ={
    textStyling:{
      fontSize:22,
      color:'black'
    },
    viewStyle:{
        backgroundColor:'grey',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:35
        
    }
  };


//make compponent available to other components
export default Header ;