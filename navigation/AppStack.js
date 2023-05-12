import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddPostScreen from "../screens/AddPostScreen";
import ChatScreen from "../screens/ChatScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = ({navigation}) => {
    return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Star Wars"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: '#2e64e5',
                fontSize: 18
            },
            headerStyle: {
                shadowColor: '#fff',
                elevation: 0
            },
            headerRight: () => (
                <View style={{marginRight: 10}}>
                    <Ionicons.Button 
                      name="pricetags"
                      size={22}
                      backgroundColor="#fff"
                      color="#181818"
                      onPress={() => navigation.navigate('AddPost')}
                    />
                </View>
            )
          }}
        />
        <Stack.Screen
          name="AddPost"
          component={AddPostScreen}
          options= {{
            title: '',
            headerTitleAlign: 'center',
            headerStyle: {
                shadowColor: '#fff',
                backgroundColor: '#fff',
                elevation: 0
            },
            headerBackTitleVisible: false,
            headerBackImage: () => (
                <View style={{marginLeft: 15}}>
                  <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                </View>
            ),
            headerLeft: () => (
                <View style={{marginLeft: 16}}>
                  <FontAwesome.Button 
                    name= "long-arrow-left"
                    size={25}
                    backgroundColor="#fff"
                    color="#181818"
                    onPress={() => navigation.navigate('Star Wars')}
                  />
                </View>
              ),
              headerRight: () => (
                <View style={{marginRight: 10}}>
                    <Ionicons.Button 
                      name="send"
                      size={22}
                      backgroundColor="#fff"
                      color="#181818"
                      onPress={() => navigation.navigate('Star Wars')}
                    />
                </View>
            )
          }}
        />
    </Stack.Navigator>
    );
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            activeTintColor: '#2e64e5',
            headerShown: false
          }}
        >
            <Tab.Screen 
              name="Home"
              component={StackNavigator}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Ionicons 
                      name="home"
                      color={color}
                      size={size}
                    />
                )
              }}
            />
            <Tab.Screen 
              name="Messages"
              component={ChatScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons 
                      name="chatbox-ellipses"
                      color={color}
                      size={size}
                    />
                )
              }}
            />
            <Tab.Screen 
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons 
                      name="heart"
                      color={color}
                      size={size}
                    />
                )
              }}
            />
        </Tab.Navigator>
    )
            }

const AppStack = () => {
    return (
        <TabNavigator />
    )
    
}

export default AppStack;