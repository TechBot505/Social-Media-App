import { View, Text, StyleSheet } from "react-native";

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat Screen</Text>
        </View>
    )
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#181818'
    },
    text: {
        fontSize: 32,
        marginBottom: 8,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})
