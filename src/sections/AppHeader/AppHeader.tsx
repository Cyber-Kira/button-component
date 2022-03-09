import React, { useState } from "react";

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
        <a href="#">Docs</a>
        <input type="checkbox" name="theme-changer" id="theme-changer" />
        <a href="#">
          <span className="visually-hidden">Github</span>
        </a>
      </div>
    </header>
  );
};
