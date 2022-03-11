import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Affix } from "./lib/components";
import { ThemeContext, Themes, themes } from "./lib/components/Theme";
import { AppHeader } from "./sections/AppHeader";
import "./styles/main.scss";

const App = () => {
  const [theme, setTheme] = useState<Themes>(themes.light);

  const toggleTheme = () => {
    const currentTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(currentTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Affix offsetTop="0">
        <AppHeader changeTheme={toggleTheme} />
      </Affix>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      {/* [] You need to create additional class helper for margin-top prop*/}
      {/* [] Think about Col component that will recieve width from 0 to 12
          and break point. Something like:
            <Col break="md" width="6">CONTENT</Col>
            <Col break="sm" width="12">CONTENT</Col>
          
          [x] That mean you need to create additional css classes
      */}
      {/* <div className="wrapper row" style={{ marginTop: "102px" }}>
        <div className="col col-md-3">Menu component</div>
        <div className="col col-md-9 col-sm-12">
          Content component that renders content inside render function
        </div>
      </div> */}
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
