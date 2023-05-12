import { InputField, InputWrapper } from "../styles/AddPost";
import { Container } from "../styles/FeedStyle";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from "react-native";

const AddPostScreen = () => {
    return (
        <Container>
            <InputWrapper>
                <InputField placeholder="Whats on your mind?" multiline placeholderTextColor="#6B728E" />
            </InputWrapper>
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' onPress={() => console.log("notes tapped!")}>
                    <Icon name="images" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                {/* <ActionButton.Item buttonColor='#3498db' onPress={() => { }}>
                    <Icon name="notifications-off" style={styles.actionButtonIcon} />
                </ActionButton.Item> */}
                <ActionButton.Item buttonColor='#1abc9c' onPress={() => { }}>
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
