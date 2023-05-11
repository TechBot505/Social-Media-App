import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" />
        </Stack.Navigator>
    )
}

export default AppStack;