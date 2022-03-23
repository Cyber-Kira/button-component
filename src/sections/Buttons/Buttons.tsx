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
            <Button variant="outline" />
            <Button variant="text" />
          </Items>
          <Item title="Type">
            There are <Text code>primary</Text> button,{" "}
            <Text code>outlined</Text> button and <Text code>text</Text>
            button.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{mainButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button size="lg" />
            <Button variant="outline" />
            <Button disableShadow size="sm" />
          </Items>
          <Item title="Type">
            Dev Components support a default button size as well as a large and
            small size. If a large or small button is desired, set the{" "}
            <Text code>size</Text>
            property to either <Text code>large</Text> or{" "}
            <Text code>small</Text> respectively. Omit the size property for a
            button with the default size.
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
