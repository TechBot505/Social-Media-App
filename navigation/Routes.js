import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "./AuthProvider";
import { auth } from "../firebase";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onStateChanged);
        return subscriber;
    }, [])

    if(initializing) return null;

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    )
};

export default Routes;