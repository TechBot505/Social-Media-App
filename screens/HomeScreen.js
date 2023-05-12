import { FlatList, SafeAreaView } from 'react-native';
import { Container2 } from "../styles/FeedStyle";
import PostCard from "../components/PostCard";

const Posts = [
    {
      id: '1',
      userName: 'Darth Vader',
      userImg: require('../assets/posts/img1.jpg'),
      postTime: '4 mins ago',
      post:
        'May the Force be with you!.',
      postImg: require('../assets/posts/img1.jpg'),
      liked: true,
      likes: '14',
      comments: '5',
    },
    {
      id: '2',
      userName: 'Darth Sedious',
      userImg: require('../assets/posts/img2.jpg'),
      postTime: '2 hours ago',
      post:
        'I find your lack of faith disturbing.',
      postImg: 'none',
      liked: true,
      likes: '8',
      comments: '0',
    },
    {
      id: '3',
      userName: 'Anakin Skywalker',
      userImg: require('../assets/posts/img3.jpg'),
      postTime: '1 hours ago',
      post:
        'You do not know the power of the Dark Side.',
      postImg: require('../assets/posts/img3.jpg'),
      liked: false,
      likes: '0',
      comments: '0',
    },
    {
      id: '4',
      userName: 'Luke Skywalker',
      userImg: require('../assets/posts/img4.jpg'),
      postTime: '1 day ago',
      post:
        'Obi Wan, have you come to destroy me?.',
      postImg: require('../assets/posts/img4.jpg'),
      liked: true,
      likes: '22',
      comments: '4',
    }
  ];

const HomeScreen = () => {
    return (
        <Container2>
            <SafeAreaView>
            <FlatList 
              data={Posts}
              renderItem={({item}) => <PostCard item={item} />}
              keyExtractor={item => item.id}
              showVerticalScrollIndicator={false}
            />
            </SafeAreaView>
        </Container2>
    )
};

export default HomeScreen;
