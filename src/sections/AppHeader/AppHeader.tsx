import React, { useContext, useState } from "react";
import GitHubDark from "./assets/GitHub-Mark-32px.png";
import GitHubLight from "./assets/GitHub-Mark-Light-32px.png";
import { Rotate as Hamburger } from "hamburger-react";
import { ThemeContext } from "../../lib/components/Theme";
import LightIcon from "./assets/brightness.png";
import DarkIcon from "./assets/moon.png";

export const AppHeader = ({ changeTheme }: { changeTheme: () => void }) => {
  const [isOpen, setOpen] = useState(false);
  const currentMenuState = isOpen ? "open" : "hidden";
  const currentTheme = useContext(ThemeContext);
  const themeChangerIcon = currentTheme === "light" ? LightIcon : DarkIcon;
  const githubIcon = currentTheme === "light" ? GitHubDark : GitHubLight;

  return (
    <header className="header wrapper-xl row">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={28}
        color={"hsla(0, 0%, 10%, 1)"}
      />
      <div className="wrapper header__logo col col-sm-12 col-md-3">
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
          <span className="theme-changer__text">Appearance</span>
          <button
            onClick={changeTheme}
            className="theme-changer__button"
            type="button"
          >
            <div className={`icon-wrapper icon-wrapper_${currentTheme}`}>
              <img
                className="theme-changer__icon"
                src={themeChangerIcon}
                alt="Theme Icon"
              />
            </div>
          </button>
        </div>
        <div className="social">
          <a
            href="https://github.com/Cyber-Kira"
            rel="noreferrer"
            target="_blank"
          >
            <img src={githubIcon} alt="Github Logo" />
            <span className="visually-hidden">Github</span>
          </a>
        </div>
      </div>
    </header>
  );
};
