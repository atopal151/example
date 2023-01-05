import React  from "react";

import {Text,AppRegistry} from "react-native"; //sadeve Text alanını kullanmak için bunu kullanabiliriz.
import ReactNative from "react-native";  // import library


//create component 

const App=()=>{
    return (
        <ul><li>hiii</li><li>hello</li></ul>,
        <Text>Merhaba</Text>
    );
}


//render component screen

AppRegistry.registerComponent('example', () => App);


