import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({title, btnType, color, backgroundColor, ...rest}) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: bgColor}]} {...rest} >
            <View style={styles.iconWrapper}>
                <FontAwesome style={styles.icon} name={btnType} size={22} color={color} />
            </View>
            <View style={styles.btnTextWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 6,
        width: '100%',
        height: windowHeight/15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 12
    },
    icon: {
        fontWeight: 'bold'
    },
    iconWrapper: {
        width: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    btnTextWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});