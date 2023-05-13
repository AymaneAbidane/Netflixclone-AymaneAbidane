import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Login from "./screens/LoginScreen";
import { getAuth } from "firebase/auth";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

const firebaseConfig = {
  apiKey: "AIzaSyD4y9hKSzNy0l75Iak7zSdI0rNTkDGBNC0",
  authDomain: "netflixe-clone-1d013.firebaseapp.com",
  projectId: "netflixe-clone-1d013",
  storageBucket: "netflixe-clone-1d013.appspot.com",
  messagingSenderId: "283889238483",
  appId: "1:283889238483:web:8cf5848503f1c7a8d22f26",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //log out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
