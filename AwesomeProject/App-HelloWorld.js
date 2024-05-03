import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "./components/Welcome";

export default function App() {

    return <>
        <View style={styles.container}>
            <Text style={styles.label}>Hello!!</Text>
            <Text style={{ color: 'green' }}>How are you!</Text>
            <Welcome name="Subramanian" />
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#61dafb'
    },
    label: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
})