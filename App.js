import { StatusBar } from "react-native";
import React from 'react'
import { StyleSheet,Text,View } from "react-native";
import OnBoardingScreen from "./screens/OnBoardingScreen";
export default function App(){
  return(
    <View style={styles.container}>
      <OnBoardingScreen/>
      <StatusBar style="auto"/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  }
})