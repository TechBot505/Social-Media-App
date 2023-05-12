import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { Container, Text1, Card, Text2, Text3 } from '../styles/FeedStyle';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [ConfirmPassword, setConfirmPassword] = useState('');

    const {register} = useContext(AuthContext);

    return (
        <Container>
            <View style={styles.textBox}>
              <Text1 >Create an Account</Text1>
              <Text2 >Please fill up Email and Password to create your account</Text2>
            </View>

            <Card>
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
            </Card>
            {/* <FormInput
              labelValue={ConfirmPassword}
              onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)} 
              placeholderText="Confirm Password"
              iconType="lock"
              secureTextEntry={true}
            /> */}
            <View style={styles.lastText}>
            <Text2 >Have an account?</Text2>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text3> Log In</Text3>
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
        </Container>
    );
};

export default SignupScreen;

const styles =  StyleSheet.create({
    textBox: {
      alignItems: 'flex-start'
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