export const mainInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input
      placeholder="Basic usage"
      label="Label"
      fullWidth
      helperText="LabelHelper"
    />
  </>,
  mountNode,
);`;

export const fixedWidthInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input placeholder="Input with fixed width" label="Label" />
    <Input size="sm" startIcon={<KeyIcon />} />
  </>,
  mountNode,
);`;

export const errorInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input
      placeholder="Input password"
      label="Label"
      fullWidth
      error
      helperText="LabelHelper"
    />
  </>,
  mountNode,
);`;

export const sizesInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input
      placeholder="Medium size"
      label="Label"
      fullWidth
      size="md"
    />
  </>,
  mountNode,
);`;

export const multiLineInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input placeholder="" label="Label" fullWidth multiline row="2" />
    <Input
      placeholder="Max number of rows is 6"
      label="Label"
      fullWidth
      multiline
      row="6"
    />
  </>,
  mountNode,
);`;

export const passwordInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input
      placeholder="Input password"
      label="Label"
      fullWidth
      password
    />
  </>,
  mountNode,
);`;

export const iconsInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
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
  </>,
  mountNode,
);`;
export const valueInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
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
  </>,
  mountNode,
);`;

export const disabledInputCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Input
      placeholder="Disabled input"
      label="Label"
      fullWidth
      disabled
    />
  </>,
  mountNode,
);`;
