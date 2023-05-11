import { createContext, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            login: async (email, password) => {
                try {
                    await signInWithEmailAndPassword(auth, email, password)
                } catch(e) {
                    console.log(e);
                }
            },
            register: async (email, password) => {
                try {
                    await createUserWithEmailAndPassword(auth, email, password);
                } catch(e) {
                    console.log(e);
                }
            },
            logout: async () => {
                try {
                    signOut(auth);
                } catch(e) {
                    console.log(e);
                }
            }
          }}
        >
            {children}
        </AuthContext.Provider>
    )
}