import React, { useCallback, useEffect, useRef, useState } from "react";
import copyIcon from "../assets/copy-icon.svg";
import "./RandomPassword.css";

const RandomPassword = () => {
  const [length, setLength] = useState(8);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  useEffect(() => {
    generatePassword();
  }, [length, lowerCase, upperCase, numbers, symbols]);

  const generatePassword = useCallback(() => {
    let characterList = "";
    const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersList = "0123456789";
    const symbolsList = "!@#$%^&*()?";

    if (lowerCase) {
      characterList += lowercaseList;
    }
    if (upperCase) {
      characterList += uppercaseList;
    }
    if (numbers) {
      characterList += numbersList;
    }
    if (symbols) {
      characterList += symbolsList;
    }

    let pass = "";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * characterList.length);
      pass += characterList.charAt(char);
    }

    setPassword(pass);
  }, [length, lowerCase, upperCase, numbers, symbols]);

  const handleCopy = () => {
    window.alert("PassWord Cpoied!!");
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="container">
      <h2 className="title">Random PassWord Generator</h2>
      <div className="password-wrapper">
        <div className="password-area">
          <div className="password">
            <input
              type="text"
              value={password}
              readOnly
              placeholder="Click on the Generate Password"
              ref={passwordRef}
            />
            <img
              src={copyIcon}
              alt="copyIcon"
              className="copyicon"
              onClick={handleCopy}
            />
          </div>
        </div>
      </div>

      <div className="setting">
        <h3>Customize your password</h3>
        <div className="customize">
          <div className="checkboxes">
            <div className="left">
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  defaultChecked={lowerCase}
                  onChange={() => {
                    setLowerCase((prev) => !prev);
                  }}
                />
                <label>Include Lowercase(a-z)</label>
              </div>
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  defaultChecked={upperCase}
                  onChange={() => {
                    setUpperCase((prev) => !prev);
                  }}
                />
                <label>Include UpperCase(A-Z)</label>
              </div>
            </div>

            <div className="right">
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  defaultChecked={numbers}
                  onChange={() => {
                    setNumbers((prev) => !prev);
                  }}
                />
                <label>Include Numbers(0-9)</label>
              </div>
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  defaultChecked={symbols}
                  onChange={() => {
                    setSymbols((prev) => !prev);
                  }}
                />
                <label>Include Symbols(&-#)</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="password-length">
        <h3>Password Length</h3>
        <div className="slider">
          <p className="rangeValue">{length}</p>
          <div className="range">
            <input
              type="range"
              defaultValue={length}
              min={8}
              max={40}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomPassword;
