import React, { useContext } from "react";
import PropTypes from "prop-types";
import { themeContext } from "./context";

const MainGuest = ({ userInform }) => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <div className="main_img user-img"></div>
      <div className="main_inform">
        <p className={`main_nickname ${theme}`} text={userInform}>
          Nickname: {userInform.Nickname}
        </p>
        <p className={`text ${theme}`} text={userInform}>
          Username: {userInform.Username}
        </p>
        <p className={`text ${theme}`} text={userInform}>
          Birthday: {userInform.Birthday}
        </p>
        <p className={`text ${theme}`} text={userInform}>
          About: {userInform.About}
        </p>
      </div>
    </>
  );
};

MainGuest.propTypes = {
  userInform: PropTypes.object,
};

export default MainGuest;
