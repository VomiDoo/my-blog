import React, { useContext } from "react";
import PropTypes from "prop-types";
import MainInformation from "./MainInformation";
import { themeContext } from "./context";

const MainUser = ({ userInform, setUserInform }) => {
  const { theme } = useContext(themeContext);

  return (
    <>
      <div className="main_img user-img"></div>
      <div className="main_inform">
        <MainInformation
          nameClass={`main_nickname ${theme}`}
          inputType="text"
          name="Nickname"
          length="12"
          text={userInform}
          setText={setUserInform}
        />
        <MainInformation
          nameClass={`text ${theme}`}
          inputType="text"
          name="Username"
          length="40"
          text={userInform}
          setText={setUserInform}
        />
        <MainInformation
          nameClass={`text ${theme}`}
          inputType="date"
          name="Birthday"
          length="10"
          text={userInform}
          setText={setUserInform}
        />
        <MainInformation
          nameClass={`text ${theme}`}
          inputType="text"
          name="About"
          length="70"
          text={userInform}
          setText={setUserInform}
        />
      </div>
    </>
  );
};

MainUser.propTypes = {
  userInform: PropTypes.object,
  setUserInform: PropTypes.func,
};

export default MainUser;
