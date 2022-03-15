import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Affix } from "./lib/components";
import { ThemeContext, Themes, themes } from "./lib/components/Theme";
import { AppHeader } from "./sections/AppHeader";
import { CodeBox } from "./sections/CodeBox";
import { Menu } from "./sections/Menu";
import { ItemGroup } from "./sections/Menu/components/ItemGroup";
import { DataItem } from "./sections/Menu/types";
import { Typography } from "./sections/Typography";
import "./styles/main.scss";

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
      link: "#",
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

  const { Item, Toggle } = CodeBox;

  return (
    <ThemeContext.Provider value={theme}>
      <Affix offsetTop="0">
        <AppHeader changeTheme={toggleTheme} />
      </Affix>
      {/* TODO: create additional component wrapper */}
      <div className="row content-row">
        <div className="menu-wrapper d-none-laptop b-color">
          <Menu>
            <ItemGroup header={"General"} items={data} />
          </Menu>
        </div>
        <div className="col menu-col d-none-laptop"></div>
        <div className="content-wrapper col col-md-6 col-sm-12">
          {/* <Header level={1}>Button</Header>
          <Paragraph>To trigger an operation.</Paragraph>
          <Header level={2}>Examples</Header> */}
          <CodeBox>
            <CodeBox.Item>Hello</CodeBox.Item>
            <CodeBox.Item title="Type">Hello</CodeBox.Item>
            <CodeBox.Item buttons>
              <CodeBox.Toggle />
            </CodeBox.Item>
            <CodeBox.Item>Hello</CodeBox.Item>
          </CodeBox>
        </div>
      </div>
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
