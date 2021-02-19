import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import Netflix from "./netflix.png";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav__logo"
          src={Netflix}
          alt="logo"
        />
        <img
          onClick={() => {
            history.push("/profile");
          }}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt="icon"
        />
      </div>
    </div>
  );
}

export default Nav;
