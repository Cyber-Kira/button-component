import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Affix } from "./lib/components";
import { ThemeContext, Themes, themes } from "./lib/components/Theme";
import { AppHeader } from "./sections/AppHeader";
import { Menu } from "./sections/Menu";
import { ItemGroup } from "./sections/Menu/components/ItemGroup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useOutletContext,
} from "react-router-dom";
import "./styles/main.scss";
import { Buttons } from "./sections/Buttons";
import { Inputs } from "./sections/Inputs/Inputs";
import { Footer } from "./sections/Footer";
import { Drawer } from "./sections/Drawer";
import { data } from "./data";

type ContextType = {
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};

const App = () => {
  const [theme, setTheme] = useState<Themes>("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("data-theme");
    if (localTheme === "dark") {
      setTheme("dark");
    }
    if (localTheme === "light") {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(currentTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Affix offsetTop="0">
        <AppHeader changeTheme={toggleTheme} />
        <Drawer />
      </Affix>
      <div className={`row content-row theme-${theme}`}>
        <div className="menu-wrapper d-none-laptop b-color">
          <Menu>
            <ItemGroup header={"General"} items={data} />
          </Menu>
        </div>
        <div className="col menu-col d-none-laptop"></div>
        <div className="content-wrapper col col-md-10 col-sm-12">
          <Outlet context={{ setTheme }} />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useOutletContext<ContextType>();
}

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Buttons />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/inputs" element={<Inputs />} />
          </Route>
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
