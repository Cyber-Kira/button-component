import React, { useContext, useState } from "react";
import GitHubDark from "./assets/GitHub-Mark-32px.png";
import GitHubLight from "./assets/GitHub-Mark-Light-32px.png";
import { Rotate as Hamburger } from "hamburger-react";
import { ThemeContext } from "../../lib/components/Theme";
import LightIcon from "./assets/brightness.png";
import DarkIcon from "./assets/moon.png";
import { Link } from "react-router-dom";

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
        <Link to={"/"} className="header__text">
          <span className="text_highlighted-red">Dev</span>challenges.io
        </Link>
      </div>
      <div
        className={`wrapper header__navigation col col-md-9 ${currentMenuState}`}
      >
        <ul className="navigation-menu">
          <li>
            <Link to={"#"}>Docs</Link>
          </li>
          <li>
            <Link to={"#"}>API</Link>
          </li>
          <li>
            <Link to={"#"}>Playground</Link>
          </li>
          <li>
            <Link to={"#"}>Ecosystem</Link>
          </li>
          <li>
            <Link to={"#"}>About</Link>
          </li>
          <li>
            <Link to={"#"}>Sponsor</Link>
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
