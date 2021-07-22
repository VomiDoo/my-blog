import React, { useState, useEffect, useContext } from "react";
import Main from "./components/Main";
import LoginWindow from "./components/LoginWindow";
import Posts from "./components/Posts";
import { themeContext } from "./components/context";
import "./App.css";

function App() {
  const [ guest, setGuest ] = useState(JSON.parse(localStorage.getItem("guest")));
  const [ openLogin, setOpenLogin ] = useState(false);
  const [ userInform, setUserInform ] = useState(
    JSON.parse(localStorage.getItem("userInform")) || {
      Nickname: "VomiDoo",
      Username: "Darya Krupko",
      Birthday: "21.05.1998",
      About: "woof",
    }
  );

  const { toggle, theme } = useContext(themeContext);

  useEffect(() => {
    localStorage.setItem("guest", JSON.stringify(guest));
  }, [guest]);

  const loginHeadler = () => {
    setOpenLogin(true);
  };

  const logoutHendler = () => {
    setGuest(true);
  };

  return (
    <div className={`wrap ${theme}`}>
      <div className={`container ${theme}`}>
        <div className={`header ${theme}`}>
          <button className={`header_theme ${theme}`} onClick={toggle}>
            Theme
          </button>
          <button
            className={`header_btn ${theme}`}
            onClick={guest ? loginHeadler : logoutHendler}
          >
            {guest ? "LogIn" : "LogOut"}
          </button>
          <LoginWindow
            nameClass={openLogin ? "login-open" : "login-close"}
            guest={guest}
            setGuest={setGuest}
            setOpenLogin={setOpenLogin}
          />
        </div>
        <Main
          status={guest}
          userInform={userInform}
          setUserInform={setUserInform}
        />
        <hr className={`line ${theme}`}></hr>
        <Posts guest={guest} userInform={userInform} />
      </div>
    </div>
  );
}

export default App;
