import React from "react";
import ReactDOM from "react-dom";
import { Affix } from "./lib/components";
import { AppHeader } from "./sections/AppHeader";
import "./styles/main.scss";

const App = () => {
  return (
    <Affix offsetTop="0">
      <AppHeader />
    </Affix>
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
      <div className="row" style={{ marginTop: "102px" }}>
        <div className="col col-md-3">Menu component</div>
        <div className="col col-md-9 col-sm-12">
          Content component that renders content inside render function
        </div>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
