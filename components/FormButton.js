import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

const FormButton = ({title, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 8,
        width: '100%',
        height: windowHeight/15,
        padding: 10,
        backgroundColor: '#D92027',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginBottom: 28,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        paddingBottom:4
    }
});