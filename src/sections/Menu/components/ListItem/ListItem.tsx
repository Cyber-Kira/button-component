import React from "react";
import { Link } from "react-router-dom";
import { DataItem } from "../../types";

export const ListItem = ({ title, link }: DataItem) => {
  return (
    <li className="menu__item">
      <Link to={link} className="menu__link">
        {title}
      </Link>
    </li>
  );
};
