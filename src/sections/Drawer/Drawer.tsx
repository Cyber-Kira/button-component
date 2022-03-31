import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { data } from "../../data";
import { ItemGroup } from "../Menu/components/ItemGroup";

export const Drawer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={18}
          color={"hsla(0, 0%, 10%, 1)"}
        />
      </div>
      <div className="drawer-mask"></div>
      <div className={`drawer-content ${isOpen ? "drawer-content-open" : ""}`}>
        <ItemGroup header={"General"} items={data} />
      </div>
    </>
  );
};
