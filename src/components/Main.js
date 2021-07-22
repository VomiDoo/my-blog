import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MainUser from "./MainUser";
import MainGuest from "./MainGuest";

function Main({ status, userInform, setUserInform }) {
  const saveUserInform = () => {
    localStorage.setItem("userInform", JSON.stringify(userInform));
  };

  useEffect(() => {
    saveUserInform();
  }, [userInform]);

  return (
    <div className="main">
      {status ? (
        <MainGuest userInform={userInform} />
      ) : (
        <MainUser userInform={userInform} setUserInform={setUserInform} />
      )}
    </div>
  );
}

Main.propTypes = {
  status: PropTypes.bool,
  userInform: PropTypes.object,
  setUserInform: PropTypes.func,
};

export default Main;
