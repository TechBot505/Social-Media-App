import { View, Text, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import { useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";

const HomeScreen = () => {
    const {user, logout} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton title="Logout" onPress={() => logout()} />
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