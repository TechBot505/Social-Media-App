import { Text, StyleSheet, View } from "react-native";
import FormButton from "../components/FormButton";
import { useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";

const ProfileScreen = () => {
    const {user, logout} = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton title="Logout" onPress={() => logout()} />
        </View>
    )
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#181818'
    },
    text: {
        fontSize: 24,
        marginBottom: 8,
        color: '#FFFFFF'
    },
})