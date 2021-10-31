import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "../components/SignUp/SignUp";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // CreateUser Using  Email & Password 
    const createUserUsingEmail = (name, email, password) => {
        console.log(email);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                setUser(userCredential.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // login Using  Email & Password 
    const loginUserUsingEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                setUser(userCredential.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // SignIn Using google provider 
    const signInUsingGoogle = () => {
        // setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // loginWIthEmailPassword function call 
    const loginWIthEmailPassword = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);

            })
            .catch((error) => {
                setError(error.message)
            });
    }

    // logout function call 
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    }
    // observe user state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    return {
        user,
        error,
        isLoading,
        createUserUsingEmail,
        signInUsingGoogle,
        logout,
        loginWIthEmailPassword,
        loginUserUsingEmail
    }
}

export default useFirebase;