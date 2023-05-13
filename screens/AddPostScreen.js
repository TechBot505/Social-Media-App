import { AddImage, InputField, InputWrapper } from "../styles/AddPost";
import { Container } from "../styles/FeedStyle";
import ActionButton from 'react-native-action-button';
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from "react";

const AddPostScreen = () => {
    const [image, setImage] = useState(null);

    async function pickImageHandler() {
        const image = await launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        // console.log(image);
        if (!image.canceled) {
            setImage(image.assets[0].uri);
        }
    };

    return (
        <Container>
            <InputWrapper>
                {image && <AddImage source={{uri: image}} />}
                <InputField placeholder="Whats on your mind?" multiline placeholderTextColor="#6B728E" />
            </InputWrapper>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' onPress={pickImageHandler}>
                    <Icon name="images" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' onPress={() => console.log("notes tapped!")}>
                    <Icon name="camera" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </Container>
    )
};

export default AddPostScreen;

const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });