import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { themeContext } from "./context";

const MainInformation = ({
  nameClass,
  inputType,
  name,
  length,
  text,
  setText,
}) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const { theme } = useContext(themeContext);

  const editHandler = () => {
    setEdit(!edit);
  };

  const changeHandler = ({ target }) => {
    setValue(target.value);
  };

  const acceptHandler = () => {
    if (value) {
      setText({ ...text, [name]: value });
      editHandler();
    }
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      acceptHandler();
    }
  }

  return (
    <p className={`main_text ${theme}`}>
      {edit ? (
        <>
          <button className="edit-accept" onClick={acceptHandler}>
            ✓
          </button>
          <input
            className={`main_input ${theme}`}
            maxLength={length}
            type={inputType}
            onChange={changeHandler}
            onKeyPress={handleKeyPress}
            placeholder={"Max length: " + length}
          ></input>
          <button className="edit-cancel" onClick={editHandler}>
            ✘
          </button>
        </>
      ) : (
        <>
          <p className={nameClass}>
            {name}: {text[name]}
          </p>
          <button className="edit-btn" onClick={editHandler}>
            ✎
          </button>
        </>
      )}
    </p>
  );
};

MainInformation.propTypes = {
  nameClass: PropTypes.string,
  inputType: PropTypes.string,
  name: PropTypes.string,
  length: PropTypes.string,
  text: PropTypes.object,
  setText: PropTypes.func,
};

export default MainInformation;
