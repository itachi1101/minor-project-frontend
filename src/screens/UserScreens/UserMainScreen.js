
import { ScrollView, StyleSheet, Text, StatusBar, TouchableOpacity, View, SafeAreaView } from "react-native";
import BillPaymentCard from "../../Components/BillPaymetCard";
import CalendarComponent from "../../Components/CalanderComponent";
import CustomStatusCard from "../../Components/CustomStatusCard";

export default function UserMainScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                    <CustomStatusCard />
                    <BillPaymentCard previousBills={() => {
                        navigation.navigate("previousBills")
                    }} />

                </ScrollView>
                <View style={styles.calendarContainer}>
                    <Text style={styles.calendarText}>
                        Collection Record
                    </Text>
                    <CalendarComponent />
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("registerComplaint")
                }}
                style={styles.complainContainer}>
                    <Text style={styles.complainText}>
                        Register Complaint
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginBottom: 20,
        backgroundColor: "white"
    },
    scrollViewContainer: {
        backgroundColor: "white"
    },
    calendarContainer: {
        padding: 20,

    }
    , calendarText: {
        textAlign: "center",
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: "black"
    }
    ,
    complainContainer: {
        marginTop: 40,
        backgroundColor: 'coral',
        padding: 15,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 18,
        marginBottom: 20
    },
    complainText: {
        textAlign: "center",
        fontSize: 24,
        color: "white",
        fontWeight: 'bold',
    }
})