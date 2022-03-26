import React from "react";
import { Button } from "../Button";
import { colors, sizes, variants } from "../Button/types";
import { CodeBox } from "../CodeBox";
import { Typography } from "../Typography";
import {
  buttonsIconCodeSample,
  buttonsTooltipCodeSample,
  colorButtonCodeSample,
  disabledButtonCodeSample,
  mainButtonCodeSample,
  shadowButtonCodeSample,
  sizeButtonCodeSample,
} from "./data";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../..";

export const Buttons = () => {
  const { Item, Items, Toggle, CopyToClipboard } = CodeBox;
  const { Header, Paragraph, Text } = Typography;
  const { setTheme } = useTheme();

  return (
    <>
      <Header level={1}>Button</Header>
      <Paragraph>To trigger an operation.</Paragraph>
      <Header level={2}>Examples</Header>
      <div className="content">
        <CodeBox>
          <Items>
            <Button>Default</Button>
            <Button variant="outline">Default</Button>
            <Button variant="text">Default</Button>
          </Items>
          <Item title="Type">
            There are <Text code>primary</Text> button,{" "}
            <Text code>outlined</Text> button and <Text code>text</Text>
            button.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={mainButtonCodeSample} />
          </Item>
          <Item code>{mainButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button size="lg">Default</Button>
            <Button variant="outline">Default</Button>
            <Button size="sm">Default</Button>
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
            <CopyToClipboard textToCopy={sizeButtonCodeSample} />
          </Item>
          <Item code>{sizeButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button disabled>Default</Button>
            <Button variant="text" disabled>
              Default
            </Button>
          </Items>
          <Item title="Disabled">
            To mark a button as <Text code>disabled</Text>, add the disabled
            property to the
            <Text code>Button</Text>.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={disabledButtonCodeSample} />
          </Item>
          <Item code>{disabledButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button color="default">Default</Button>
            <Button color="primary">Default</Button>
            <Button color="secondary">Default</Button>
            <Button color="danger">Default</Button>
          </Items>
          <Item title="Color">
            To change color of a <Text code>Button</Text> set{" "}
            <Text code>color</Text> to <Text code>default</Text>,{" "}
            <Text code>primary</Text>, <Text code>secondary</Text> or{" "}
            <Text code>danger</Text>.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={colorButtonCodeSample} />
          </Item>
          <Item code>{colorButtonCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Button color="default" disableShadow>
              Default
            </Button>
          </Items>
          <Item title="Shadow">
            To disable box shadow set <Text code>disableShadow</Text> property
            to <Text code>Button</Text>.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={shadowButtonCodeSample} />
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
        <CodeBox>
          <Items>
            <Button
              startIcon={<BedtimeIcon fontSize="small" />}
              handleClick={() => setTheme("dark")}
              tooltip="Long tooltip that will change theme"
            ></Button>
            <Button
              shape="circle"
              startIcon={<LightModeIcon fontSize="small" />}
              tooltip="Light mode"
              handleClick={() => setTheme("light")}
            />
          </Items>
          <Item title="Tooltip">
            To add tip to <Text code>Button</Text> set <Text code>tooltip</Text>{" "}
            property to some text.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={buttonsTooltipCodeSample} />
          </Item>
          <Item code>{buttonsTooltipCodeSample}</Item>
        </CodeBox>
      </div>
    </>
  );
};
