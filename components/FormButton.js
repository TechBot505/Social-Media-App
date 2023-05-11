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
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        padding: 10,
        backgroundColor: '#2e64e5',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});