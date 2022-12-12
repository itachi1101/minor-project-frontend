
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CustomButton from '../../Components/CustomButton';

export default function SelectUserTypeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Choose your account type
        </Text>
        <CustomButton title="Admin" />
        <CustomButton title="User" />
        <CustomButton title="Vehicle Owner" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:StatusBar.currentHeight
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: "black"
  },
  wrapper: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"

  }
});
