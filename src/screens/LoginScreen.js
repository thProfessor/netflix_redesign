import React, { useState } from "react";
import "./LoginScreen.css";
import Logo from "../netflix.png";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src={Logo} className="loginScreen__logo" alt="logo" />
      </div>
      <button onClick={() => setSignIn(true)} className="loginScreen__button">
        Sign In
      </button>
      <div className="loginScreen__gardient"></div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restrat your
              membership
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
