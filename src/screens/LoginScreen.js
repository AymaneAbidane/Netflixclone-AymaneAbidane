import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginscreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginscreen_gradient" />

        <div className="loginscreen_body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more. </h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>

              <div className="loginscreen_inputs">
                <form action="">
                  <input type="email" placeholder="Email Adress" />
                  <button
                    className="loginscreen_getstarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
