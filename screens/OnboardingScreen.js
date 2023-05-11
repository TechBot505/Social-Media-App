import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const DoneHandler = ({ ...props}) => (
    <TouchableOpacity
      {...props}
      style={{marginHorizontal: 16}}
    >
        <Text
          style={{fontSize: 16}}
        >Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
          DoneButtonComponent={DoneHandler}
          onSkip={() => {navigation.navigate("Login")}}
          onDone={() => {navigation.navigate("Login")}}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/1.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A new way to connect with the World',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/2.png')} />,
                    title: 'Share your Favourites',
                    subtitle: 'Share your thoughts with similar kind of people',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/3.png')} />,
                    title: 'Become the Star',
                    subtitle: 'Let the spot light capture you',
                }
            ]}
        />
    );
};

export default OnboardingScreen;