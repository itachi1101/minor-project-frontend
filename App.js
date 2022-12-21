import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet,StatusBar } from "react-native";



// --------------------------context--------------------------------------
import { AuthProvider } from "./src/Context/AuthContext";


// --------------------------------navigation---------------------------------------------
import AppNavigation from "./src/Navigation/AppNavigation";
import AuthNavigation from "./src/Navigation/AuthNavigation";



export default function App() {
  const user = true
  return (
    <AuthProvider>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </AuthProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
})