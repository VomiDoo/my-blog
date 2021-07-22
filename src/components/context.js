import React, { useState, useEffect } from "react";

export const themeContext = React.createContext("");

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || { theme: "" }
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    if (theme.theme === "") {
      setTheme({ theme: "black" });
    } else {
      setTheme({ theme: "" });
    }
  };

  return (
    <themeContext.Provider value={{ theme: theme.theme, toggle: toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
