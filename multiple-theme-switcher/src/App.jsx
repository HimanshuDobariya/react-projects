import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("theme-white");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  });

  const handleClick = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <>
      <div className={`container ${theme}`}>
        <div className="theme-option">
          <div
            id="theme-white"
            onClick={() => {
              handleClick("theme-white");
            }}
            className={`${theme === "theme-white" ? "active" : ""}`}
          ></div>
          <div
            id="theme-blue"
            onClick={() => {
              handleClick("theme-blue");
            }}
            className={`${theme === "theme-blue" ? "active" : ""}`}
          ></div>
          <div
            id="theme-orange"
            onClick={() => {
              handleClick("theme-orange");
            }}
            className={`${theme === "theme-orange" ? "active" : ""}`}
          ></div>
          <div
            id="theme-purple"
            onClick={() => {
              handleClick("theme-purple");
            }}
            className={`${theme === "theme-purple" ? "active" : ""}`}
          ></div>
          <div
            id="theme-green"
            onClick={() => {
              handleClick("theme-green");
            }}
            className={`${theme === "theme-green" ? "active" : ""}`}
          ></div>
          <div
            id="theme-black"
            onClick={() => {
              handleClick("theme-black");
            }}
            className={`${theme === "theme-black" ? "active" : ""}`}
          ></div>
        </div>
        <div className="content-box">
          <h3>Multiple Theme Switcher</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ut quas sapiente iure quam necessitatibus atque facere modi quaerat
            reiciendis quibusdam corrupti laborum, explicabo fugit. Ratione
            dolor eos atque nesciunt?
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
