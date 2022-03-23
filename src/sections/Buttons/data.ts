export const mainButtonCodeSample = `
import { Button } from 'devcp';

ReactDOM.render(
  <>
    <Button />
    <Button variant="outline" />
    <Button variant="text" />
  </>,
  mountNode,
);`;

export const sizeButtonCodeSample = `
import { Button } from 'devcp';

ReactDOM.render(
  <>
    <Button size="lg" />
    <Button variant="outline" />
    <Button size="sm" />
  </>,
  mountNode,
);`;

export const colorButtonCodeSample = `
import { Button } from 'devcp';

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
import { Button } from 'devcp';

ReactDOM.render(
  <>
    <Button disableShadow />
  </>,
  mountNode,
);`;

export const disabledButtonCodeSample = `
import { Button } from 'devcp';

ReactDOM.render(
  <>
    <Button disabled />
    <Button variant="text" disabled />
  </>,
  mountNode,
);`;
