import React, { useState } from "react";
import GitHubDark from "./assets/GitHub-Mark-32px.png";

export const AppHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const currentMenuState = menuState ? "open" : "hidden";

  const handleChange = (isChecked: boolean) => {
    setMenuState(isChecked);
  };

  return (
    <header className="header wrapper-xl row">
      <input
        type="checkbox"
        name="menu-state-changer"
        id="menu-state-changer"
        checked={menuState}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <div className="header__logo col col-sm-12 col-md-3">
        <p className="header__text">
          <span className="text_highlighted-red">Dev</span>challenges.io
        </p>
      </div>
      <div
        className={`wrapper header__navigation col col-md-9 ${currentMenuState}`}
      >
        {/* It will become a react router link and warning will be fixed */}
        <ul className="navigation-menu">
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Playground</a>
          </li>
          <li>
            <a href="#">Ecosystem</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sponsor</a>
          </li>
        </ul>
        <div className="theme-changer">
          <label>
            <span className="theme-changer__text">Appearance</span>
            <button className="theme-changer__button" type="button"></button>
          </label>
        </div>
        <div className="social">
          <a
            href="https://github.com/Cyber-Kira"
            rel="noreferrer"
            target="_blank"
          >
            <img src={GitHubDark} alt="Github Logo" />
            <span className="visually-hidden">Github</span>
          </a>
        </div>
      </div>
    </header>
  );
};
