import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            {/* <Image 
              source={require("../assets/logo.png")}
              style={styles.logo}
            /> */}
            <View style={styles.textBox}>
              <Text style={styles.text}>Sign In</Text>
              <Text style={styles.subText}>Please fill up Email and Password to Login to your account</Text>
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

            <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <FormButton
              title="Sign In"
              onPress={() => login(email, password)}
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
            <View style={styles.lastText}>
            <Text style={styles.subText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.navButtonText}> Create here</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#181818'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
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
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginTop: 32,
        left: 110,
        marginBottom: 6
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#BB371A'
    },
    lastText: {
      flexDirection: 'row',
      marginTop: 28
    }
});