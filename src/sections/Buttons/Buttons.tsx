import React from "react";
import { Button } from "../Button";
import { colors, sizes, variants } from "../Button/types";
import { CodeBox } from "../CodeBox";
import { Typography } from "../Typography";
import {
  colorButtonCodeSample,
  disabledButtonCodeSample,
  mainButtonCodeSample,
  shadowButtonCodeSample,
  sizeButtonCodeSample,
} from "./data";
import BedtimeIcon from "@mui/icons-material/Bedtime";

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
            <Button size="sm" />
          </Items>
          <Item title="Size">
            Dev Components support a default button size as well as a large and
            small size. If a large or small button is desired, set the{" "}
            <Text code>size</Text>
            property to either <Text code>lg</Text> or <Text code>sm</Text>{" "}
            respectively. Omit the size property for a button with the default
            size.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{sizeButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button disabled />
            <Button variant="text" disabled />
          </Items>
          <Item title="Disabled">
            To mark a button as <Text code>disabled</Text>, add the disabled
            property to the
            <Text code>Button</Text>.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{disabledButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button color="default" />
            <Button color="primary" />
            <Button color="secondary" />
            <Button color="danger" />
          </Items>
          <Item title="Color">
            To change color of a <Text code>Button</Text> set{" "}
            <Text code>color</Text> to <Text code>default</Text>,{" "}
            <Text code>primary</Text>, <Text code>secondary</Text> or{" "}
            <Text code>danger</Text>.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{colorButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button color="default" disableShadow />
            <Button startIcon={<BedtimeIcon fontSize="small" />} />
            <Button endIcon={<BedtimeIcon fontSize="small" />} />
          </Items>
          <Item title="Shadow">
            To disable box shadow set <Text code>disableShadow</Text> property
            to <Text code>Button</Text>.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{shadowButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button
              startIcon={<BedtimeIcon fontSize="small" />}
              handleClick={() => setTheme("dark")}
            >
              Dark mode
            </Button>
            <Button
              endIcon={<LightModeIcon fontSize="small" />}
              handleClick={() => setTheme("light")}
            >
              Light mode
            </Button>
            <Button
              startIcon={<BedtimeIcon fontSize="small" />}
              tooltip="Dark mode"
              handleClick={() => setTheme("dark")}
            />
            <Button
              shape="circle"
              startIcon={<LightModeIcon fontSize="small" />}
              tooltip="Light mode"
              handleClick={() => setTheme("light")}
            />
          </Items>
          <Item title="Icon">
            To put icon set <Text code>startIcon</Text> or{" "}
            <Text code>endIcon</Text> to icon component.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={buttonsIconCodeSample} />
          </Item>
          <Item code>{buttonsIconCodeSample}</Item>
        </CodeBox>
          </Items>
          <Item title="Shadow">
            To disable box shadow set <Text code>disableShadow</Text> property
            to <Text code>Button</Text>.
          </Item>
          <Item buttons>
            <Toggle />
          </Item>
          <Item code>{shadowButtonCodeSample}</Item>
        </CodeBox>
      </div>
    </>
  );
};
