import React from "react";
import { CodeBox } from "../CodeBox";
import { Input } from "../Input";
import { Typography } from "../Typography";
import KeyIcon from "@mui/icons-material/Key";
import {
  disabledInputCodeSample,
  errorInputCodeSample,
  fixedWidthInputCodeSample,
  iconsInputCodeSample,
  mainInputCodeSample,
  multiLineInputCodeSample,
  passwordInputCodeSample,
  sizesInputCodeSample,
  valueInputCodeSample,
} from "./data";

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
              fullWidth
              helperText="LabelHelper"
            />
          </Items>
          <Item title="Basic usage">Basic usage example.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={mainInputCodeSample} />
          </Item>
          <Item code>{mainInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input placeholder="Input with fixed width" label="Label" />
            <Input size="sm" startIcon={<KeyIcon />} />
          </Items>
          <Item title="Fixed width">Fixed width.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={fixedWidthInputCodeSample} />
          </Item>
          <Item code>{fixedWidthInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input
              placeholder="Input password"
              label="Label"
              fullWidth
              error
              helperText="LabelHelper"
            />
          </Items>
          <Item title="Error">Error state of input.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={errorInputCodeSample} />
          </Item>
          <Item code>{errorInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input
              placeholder="Medium size"
              label="Label"
              fullWidth
              size="md"
            />
            <Input placeholder="Small size" label="Label" fullWidth size="sm" />
          </Items>
          <Item title="Sizes">
            There are two sizes of an Input box: md (56px), sm (40px).
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={sizesInputCodeSample} />
          </Item>
          <Item code>{sizesInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input placeholder="" label="Label" fullWidth multiline row="2" />
            <Input
              placeholder="Max number of rows is 6"
              label="Label"
              fullWidth
              multiline
              row="6"
            />
          </Items>
          <Item title="TextArea">For multi-line input.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={multiLineInputCodeSample} />
          </Item>
          <Item code>{multiLineInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input
              placeholder="Input password"
              label="Label"
              fullWidth
              password
            />
          </Items>
          <Item title="Password">Input type of password.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={passwordInputCodeSample} />
          </Item>
          <Item code>{passwordInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input
              placeholder="Input with start icon"
              label="Label"
              fullWidth
              startIcon={<KeyIcon />}
            />
            <Input
              placeholder="Input with end icon"
              label="Label"
              fullWidth
              endIcon={<KeyIcon />}
            />
          </Items>
          <Item title="Icons">Input type with icons.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={iconsInputCodeSample} />
          </Item>
          <Item code>{iconsInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input
              placeholder="Input with value"
              label="Label"
              fullWidth
              value="Some value"
            />
            <Input
              placeholder="Input with value"
              label="Label"
              fullWidth
              multiline
              row="3"
              value="Some value"
            />
          </Items>
          <Item title="Value">
            The <Text code>value</Text> attribute specifies the value of an{" "}
            <Text code>Input</Text> element.
          </Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={valueInputCodeSample} />
          </Item>
          <Item code>{valueInputCodeSample}</Item>
        </CodeBox>
        <CodeBox>
          <Items>
            <Input
              placeholder="Disabled input"
              label="Label"
              fullWidth
              disabled
            />
          </Items>
          <Item title="Disabled">Disabled input.</Item>
          <Item buttons>
            <Toggle />
            <CopyToClipboard textToCopy={disabledInputCodeSample} />
          </Item>
          <Item code>{disabledInputCodeSample}</Item>
        </CodeBox>
      </div>
    </>
  );
};
