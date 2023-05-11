import { View, Text, StyleSheet } from "react-native/types";
import FormButton from "../components/FormButton";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <FormButton title="Logout" onPress={() => {}} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f9fafd'
    },
    text: {
        fontSize: 28,
        color: '#333333'
    }
})