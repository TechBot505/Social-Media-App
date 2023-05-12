import { Card2, UserImg, UserInfo, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider } from "../styles/FeedStyle";
import Ionicons from 'react-native-vector-icons/Ionicons'

const PostCard = ({item}) => {
    let likeIcon = item.liked ? 'heart' : 'heart-outline';
    let likeIconColor = item.liked ? '#BB371A' : '#F0F0F0';

    if(item.likes > 0) {
        likeText = item.likes + ' Likes';
    } else {
        likeText = 'Like';
    }
    if(item.comments > 0) {
        commentText = item.comments + ' Comments';
    } else {
        commentText = 'Comment';
    }

    return (
            <Card2>
                <UserInfo>
                    <UserImg source={item.userImg} />
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.postTime}</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>{item.post}</PostText>
                {item.postImg !== 'none' ? <PostImg source={item.postImg} /> : <Divider />}
                <InteractionWrapper>
                    <Interaction active={item.liked}>
                        <Ionicons name={likeIcon} size={25} color={likeIconColor} />
                        <InteractionText active={item.liked}>{likeText}</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={25} color="#F0F0F0" />
                        <InteractionText>{commentText}</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card2>
    )
};

export default PostCard;