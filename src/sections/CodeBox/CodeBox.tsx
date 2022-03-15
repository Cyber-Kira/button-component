import React, { createContext, useContext, useState } from "react";

interface Inter {
  open: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const HightlightContext = createContext<Inter>({
  open: false,
  toggle: () => null,
});

interface Props {
  children: React.ReactNode;
  title?: string;
  buttons?: boolean;
}

export const CodeBox = ({ children }: Props) => {
  const [open, toggle] = useState(false);

  return (
    <HightlightContext.Provider value={{ open, toggle }}>
      <section className="code-box">{children}</section>
    </HightlightContext.Provider>
  );
};

const Toggle = () => {
  const { open, toggle } = useContext(HightlightContext);
  console.log(open);
  return (
    <button className="code-box__button-expand" onClick={() => toggle(!open)}>
      Toggle
    </button>
  );
};

const Item = ({ children, title, buttons }: Props) => {
  const titleElement = title ? (
    <div className="code-box__title">{title}</div>
  ) : (
    ""
  );
  return (
    <section className={`code-box__item ${buttons ? "code-box__buttons" : ""}`}>
      {titleElement}
      {children}
    </section>
  );
};

CodeBox.Item = Item;
CodeBox.Toggle = Toggle;
