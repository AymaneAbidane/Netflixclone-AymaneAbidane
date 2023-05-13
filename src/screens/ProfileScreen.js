import React from "react";
import "./ProfilScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import PlansScreen from "./PlansScreen";

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
function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profil</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/tweet_video_thumb/DfmWKAaWsAIlA7M?format=jpg&name=medium"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_Plans">
              <h3>Plans</h3>

              <PlansScreen />
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profileScreen_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
