import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Affix } from "./lib/components";
import { ThemeContext, Themes, themes } from "./lib/components/Theme";
import { AppHeader } from "./sections/AppHeader";
import { Menu } from "./sections/Menu";
import { ItemGroup } from "./sections/Menu/components/ItemGroup";
import { DataItem } from "./sections/Menu/types";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./styles/main.scss";
import { Buttons } from "./sections/Buttons";

const App = () => {
  const [theme, setTheme] = useState<Themes>(themes.light);

  const toggleTheme = () => {
    const currentTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(currentTheme);
  };

  // TODO: separate data
  const data: DataItem[] = [
    {
      title: "Colors",
      link: "#",
    },
    {
      title: "Typography",
      link: "#",
    },
    {
      title: "Spaces",
      link: "#",
    },
    {
      title: "Buttons",
      link: "/buttons",
    },
    {
      title: "Inputs",
      link: "#",
    },
    {
      title: "Grid",
      link: "#",
    },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <Affix offsetTop="0">
        <AppHeader changeTheme={toggleTheme} />
      </Affix>
      <div className="row content-row">
        <div className="menu-wrapper d-none-laptop b-color">
          <Menu>
            <ItemGroup header={"General"} items={data} />
          </Menu>
        </div>
        <div className="col menu-col d-none-laptop"></div>
        <div className="content-wrapper col col-md-10 col-sm-12">
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/buttons" element={<Buttons />} />
          </Route>
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
