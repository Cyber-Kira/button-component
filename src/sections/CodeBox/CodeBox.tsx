import React, { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface ContextInterface {
  open: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const HightlightContext = createContext<ContextInterface>({
  open: false,
  toggle: () => null,
});

interface Props {
  children: React.ReactNode;
  title?: string;
  buttons?: boolean;
  code?: boolean;
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

  const buttonText = open ? "Hide Code" : "Show Code";

  return (
    <button className="code-box__button-expand" onClick={() => toggle(!open)}>
      {buttonText}
    </button>
  );
};

const Item = ({ children, title, buttons, code }: Props) => {
  const { open } = useContext(HightlightContext);

  if (open && code) {
    return (
      <section
        className={`code-box__item ${
          code && open ? "code-box__code" : "code-box__code_hidden"
        }`}
      >
        <pre>
          <code className="language-html">
            <SyntaxHighlighter language="javascript">
              {children}
            </SyntaxHighlighter>
          </code>
        </pre>
      </section>
    );
  }

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
