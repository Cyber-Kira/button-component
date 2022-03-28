import React from "react";
import { CodeBox } from "../CodeBox";
import { Input } from "../Input";
import { Typography } from "../Typography";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const Inputs = () => {
  const { Item, Items, Toggle, CopyToClipboard } = CodeBox;
  const { Header, Paragraph, Text } = Typography;

  return (
    <>
      <Header level={1}>Input</Header>
      <Paragraph>
        A basic widget for getting the user input is a text field. Keyboard and
        mouse can be used for providing or changing data.
      </Paragraph>
      <Header level={2}>Examples</Header>
      <div className="content">
        <CodeBox>
          <Items>
            <Input
              placeholder="Basic usage"
              label="Label"
              helperText="LabelHelper"
            />
          </Items>
          <Item title="Basic usage">Basic usage example.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={"text"} />
          </Item>
          <Item code>{"text"}</Item>
        </CodeBox>
      </div>
    </>
  );
};
