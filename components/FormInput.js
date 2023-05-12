import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from "../utils/Dimensions";

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#FFFFFF" />
            </View>
            <TextInput 
              value={labelValue} 
              style={styles.input}
              placeholder={placeholderText} 
              {...rest} 
              placeholderTextColor="#666"
              numberOfLines={1} 
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#6B728E',
        borderRadius: 14,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#404258'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        alignItems: 'center',
        justifyContent: "center",
        borderRightColor: "#6B728E",
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        fontSize: 16,
        flex: 1,
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: "center"
    },
    inputField: {
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        width: windowWidth/1.5,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});

