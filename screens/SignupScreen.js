import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [ConfirmPassword, setConfirmPassword] = useState('');

    const {register} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
              <Text style={styles.text}>Create an Account</Text>
              <Text style={styles.subText}>Please fill up Email and Password to create your account</Text>
            </View>

            <View style={styles.inputBox}>
            <FormInput
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)} 
              placeholderText="Email"
              iconType="user"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormInput
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)} 
              placeholderText="Password"
              iconType="lock"
              secureTextEntry={true}
            />
            </View>
            {/* <FormInput
              labelValue={ConfirmPassword}
              onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)} 
              placeholderText="Confirm Password"
              iconType="lock"
              secureTextEntry={true}
            /> */}
            <View style={styles.lastText}>
            <Text style={styles.subText}>Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.navButtonText}> Log In</Text>
            </TouchableOpacity>
            </View>

            <FormButton
              title="Sign Up"
              onPress={() => register(email, password)}
            />
            <SocialButton 
              title="Sign in with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />
            <SocialButton 
              title="Sign in with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={() => alert("Terms and Conditions!")}>
                    <Text style={[styles.color_textPrivate, {color: '#BB371A'}]}>Terms of Service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#BB371A'}]}>Privacy Policy</Text>
            </View>
            
        </View>
    );
};

export default SignupScreen;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#181818',
        marginTop: -90
    },
    text: {
        fontSize: 32,
        marginBottom: 8,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        color: '#6B728E',
        marginBottom: 28
    },
    textBox: {
      alignItems: 'flex-start'
    },
    inputBox: {
        paddingHorizontal: 10,
        backgroundColor: '#2C2E43',
        borderRadius: 14,
        paddingBottom: 5
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#BB371A'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 28,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 14,
        fontWeight: '400',
        color: 'grey'
    },
    lastText: {
        flexDirection: 'row',
        marginTop: 32,
        left: 85,
        marginBottom: -22
      }
});