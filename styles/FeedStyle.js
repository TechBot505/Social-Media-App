import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: #181818;
  justify-content: center;
`;

export const Container2 = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: #181818;
`;


export const Card = styled.View`
  padding-horizontal: 10px;
  background-color: #2C2E43;
  border-radius: 14px;
  padding-bottom: 10px;
  padding-top: 5px
`;

export const Card2 = styled.View`
  background-color: #2C2E43;
  border-radius: 14px;
  width: 100%;
  margin-bottom: 20px
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF
`;

export const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px
`;

export const PostTime = styled.Text`
    font-size: 12px;
    color: #6B728E;
`;

export const PostText = styled.Text`
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 15px;
    color: #F0F0F0;
`;

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    /* margin-top: 15px; */
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const InteractionText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${props => props.active ? '#BB371A' : '#F0F0F0'};
    margin-top: 5px;
    margin-left: 5px;
`;

export const Text1 = styled.Text`
  font-size: 32px;
  margin-bottom: 8px;
  color: #FFFFFF;
  font-weight: bold
`;

export const Text2 = styled.Text`
  font-size: 16px;
  color: #6B728E;
  margin-bottom: 28px
`;

export const Text3 = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #BB371A
`;