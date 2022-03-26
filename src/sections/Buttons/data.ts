export const mainButtonCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Button />
    <Button variant="outline" />
    <Button variant="text" />
  </>,
  mountNode,
);`;

export const sizeButtonCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Button size="lg" />
    <Button variant="outline" />
    <Button size="sm" />
  </>,
  mountNode,
);`;

export const colorButtonCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Button color="default" />
    <Button color="primary" />
    <Button color="secondary" />
    <Button color="danger" />
  </>,
  mountNode,
);`;

export const shadowButtonCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Button disableShadow />
  </>,
  mountNode,
);`;

export const disabledButtonCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Button disabled />
    <Button variant="text" disabled />
  </>,
  mountNode,
);`;

export const buttonsIconCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
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
  </>,
  mountNode,
);`;

export const buttonsTooltipCodeSample = `
import { Button } from 'devch';

ReactDOM.render(
  <>
    <Button
      text="Dark mode"
      startIcon={<BedtimeIcon fontSize="small" />}
      handleClick={() => setTheme("dark")}
      tooltip="Long tooltip that will change theme"
    />
    <Button
      text=""
      shape="circle"
      startIcon={<LightModeIcon fontSize="small" />}
      tooltip="Light mode"
      handleClick={() => setTheme("light")}
    />
  </>,
  mountNode,
);`;
