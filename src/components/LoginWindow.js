import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { themeContext } from "./context";

const LoginWindow = ({ nameClass, setGuest, setOpenLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { theme } = useContext(themeContext);

  const userLogin = (JSON.parse(localStorage.getItem("userLogin")))

  const loginHandler = ({ target }) => {
    setLogin(target.value);
  };

  const passwordHandler = ({ target }) => {
    setPassword(target.value);
  };

  const confirmHendler = () => {
    if (userLogin.login === login && userLogin.password === password) {
      setGuest(false);
      setOpenLogin(false);
      setLogin("");
      setPassword("");
      setError("");
    } else if (userLogin.login !== login || userLogin.password !== password) {
      setError("Wrong login or password");
    }
  };

  const cancelHendler = () => {
    setOpenLogin(false);
    setLogin("");
    setPassword("");
    setError("");
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      confirmHendler();
    }
  }

  return (
    <div className={nameClass}>
      <div className={`login-blur ${theme}`}></div>
      <div className={`login ${theme}`}>
        <p className="login_error">{error}</p>
        <input
          className="login_input"
          type="text"
          onChange={loginHandler}
          onKeyPress={handleKeyPress}
          value={login}
          placeholder="Login"
        ></input>
        <input
          className="login_input"
          type="password"
          onChange={passwordHandler}
          onKeyPress={handleKeyPress}
          value={password}
          placeholder="Password"
        ></input>
        <div className="login_btns">
          <button className={`login_btn ${theme}`} onClick={confirmHendler}>
            Confirm
          </button>
          <button className={`login_btn ${theme}`} onClick={cancelHendler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

LoginWindow.propTypes = {
  nameClass: PropTypes.string,
  setGuest: PropTypes.func,
  setOpenLogin: PropTypes.func,
};

export default LoginWindow;
