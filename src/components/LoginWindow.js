import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { themeContext } from "./context";
import { useHistory} from "react-router";

const LoginWindow = ({ setGuest, setOpenLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { theme } = useContext(themeContext);
  const history = useHistory()

  const userLogin = { login: "vomidoo", password: "1q2w3e" };
  localStorage.setItem("userLogin", JSON.stringify(userLogin));

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
      history.push("/")
    } else if (userLogin.login !== login || userLogin.password !== password) {
      setError("Wrong login or password");
    }
  };

  const cancelHendler = () => {
    setOpenLogin(false);
    setLogin("");
    setPassword("");
    setError("");
    history.push("/")
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      confirmHendler();
    }
  }

  return (
    <div className="login-open">
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
