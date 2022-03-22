import React from "react";
import { Button } from "../Button";
import { colors, sizes, variants } from "../Button/types";
import { CodeBox } from "../CodeBox";
import { Typography } from "../Typography";
import { mainButtonCodeSample } from "./data";

export const Buttons = () => {
  const { Item, Items, Toggle } = CodeBox;
  const { Header, Paragraph, Text } = Typography;

  return (
    <>
      <Header level={1}>Button</Header>
      <Paragraph>To trigger an operation.</Paragraph>
      <Header level={2}>Examples</Header>
      <div className="content">
        <CodeBox>
          <Items>
            <Button />
            <Button variant={variants.outline} color={colors.secondary} />
            <Button variant={variants.text} />
            <Button disableShadow />
            <Button disabled />
            <Button variant={variants.text} disabled />
          </Items>
          <Items>
            <Button />
            <Button color={colors.primary} />
            <Button color={colors.secondary} />
            <Button color={colors.danger} />
          </Items>
          <Item title="Type">
            There are <Text code>primary</Text> button,{" "}
            <Text code>default</Text> button, text button and{" "}
            <Text code>link</Text>
            button.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{mainButtonCodeSample}</Item>
        </CodeBox>
      </div>
    </>
  );
};
