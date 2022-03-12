import React from "react";
import { DataItem } from "../../types";
import { ListItem } from "../ListItem.tsx";

export const ItemGroup = ({
  items,
  header,
}: {
  items: DataItem[];
  header: string;
}) => {
  const data = items.map((item) => {
    const { title, link } = item;
    return <ListItem title={title} link={link} key={title} />;
  });

  return (
    <>
      <div className="menu__header">{header}</div>
      <ul className="menu__list">{data}</ul>
    </>
  );
};
