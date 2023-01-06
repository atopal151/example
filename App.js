import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Header  from './src/components/header';
import CarList  from './src/components/carList';

export default function App() {

  
  
  return (

       <View>
         <Header title={"Hello React Native"}/>
         <CarList/>
       </View>
  );
}




