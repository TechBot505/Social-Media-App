import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { Container, Card, Text1, Text2, Text3 } from '../styles/FeedStyle';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);

    return (
        <Container>
            <View style={styles.textBox}>
              <Text1 >Sign In</Text1>
              <Text2 >Please fill up Email and Password to Login to your account</Text2>
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

            <TouchableOpacity style={styles.forgotButton}>
                <Text3 >Forgot Password?</Text3>
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
            <Text2 >Don't have an account?</Text2>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text3 > Create here</Text3>
            </TouchableOpacity>
            </View>
        </Container>
    );
};

export default LoginScreen;

const styles =  StyleSheet.create({
    textBox: {
      alignItems: 'flex-start'
    },
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginTop: 32,
        left: 110,
        marginBottom: 6
    },
    lastText: {
      flexDirection: 'row',
      marginTop: 28
    }
});