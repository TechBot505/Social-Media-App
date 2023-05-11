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

    // const SignupHandler = async () => {
    //     await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    //       const user = userCredential.user;
    //       console.log(user);
    //       navigation.navigate('Home');
    //     }).catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log(errorCode, errorMessage);
    //     });
    //   };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an Account</Text>
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
            {/* <FormInput
              labelValue={ConfirmPassword}
              onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)} 
              placeholderText="Confirm Password"
              iconType="lock"
              secureTextEntry={true}
            /> */}
            <FormButton
              title="Sign Up"
              onPress={() => register(email, password)}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={() => alert("Terms and Conditions!")}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Terms of Service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
            </View>
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
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? Log In</Text>
            </TouchableOpacity>
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
        backgroundColor: '#f9fafd'
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    }
});