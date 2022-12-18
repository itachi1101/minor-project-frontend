import { StatusBar } from "react-native";
import React from 'react'
import { StyleSheet,Text,View } from "react-native";
import OnBoardingScreen from "./src/screens/GlobalScreens/OnBoardingScreen";
import LoginScreen from "./src/screens/GlobalScreens/LoginScreen";
import RegisterScreen from "./src/screens/GlobalScreens/SignUpScreen";
import UserMainScreen from "./src/screens/UserScreens/UserMainScreen";
import UserProfileScreen from "./src/screens/UserScreens/UserProfileScreen";
import UserRegisterComplaintScreen from "./src/screens/UserScreens/UserRegisterComplaint";
import PreviousBills from "./src/screens/UserScreens/PreviousBills";
import SelectUserTypeScreen from "./src/screens/GlobalScreens/SelectUserTypeScreen";
export default function App(){
  return(
    <View style={styles.container}>
      <OnBoardingScreen/>
      {/* <SelectUserTypeScreen/>
      <LoginScreen/>
      <RegisterScreen/>
      <UserMainScreen/>
      <UserProfileScreen/>
      <UserRegisterComplaintScreen/>
      <PreviousBills/>
      <StatusBar style="auto"/> */}
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