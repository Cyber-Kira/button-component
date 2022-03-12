import React from "react";
import { DataItem } from "../../types";

export const ListItem = ({ title, link }: DataItem) => {
  return (
    <li className="menu__item">
      <a className="menu__link" href={link}>
        {title}
      </a>
    </li>
  );
};
