import React, { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "../Button";
import CheckIcon from "@mui/icons-material/Check";

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

  const buttonIcon = open ? (
    <CodeOffIcon fontSize="small" />
  ) : (
    <CodeIcon fontSize="small" />
  );

  return (
    <Button
      size="sm"
      variant="outline"
      shape="circle"
      tooltip="Show code"
      handleClick={() => toggle(!open)}
    >
      {buttonIcon}
    </Button>
  );
};

const CopyToClipboard = ({ textToCopy }: { textToCopy: string }) => {
  const [tooltipText, setTooltipText] = useState("Copy code");
  const [currentIcon, setCurrentIcon] = useState<React.ReactNode>(
    <ContentCopyIcon fontSize="small" />
  );

  return (
    <Button
      size="sm"
      variant="outline"
      shape="circle"
      tooltip={tooltipText}
      handleClick={() => {
        setTooltipText("Copied!");
        navigator.clipboard.writeText(textToCopy);
        setCurrentIcon(<CheckIcon fontSize="small" />);
        setTimeout(() => {
          setTooltipText("Copy code");
          setCurrentIcon(<ContentCopyIcon fontSize="small" />);
        }, 2500);
      }}
    >
      {currentIcon}
    </Button>
  );
};

const Item = ({ children, title, buttons, code }: Props) => {
  const { open } = useContext(HightlightContext);

  if (!open && code) {
    return null;
  }

  if (open && code) {
    return (
      <section
        className={`code-box__item ${code && open ? "code-box__code" : ""}`}
      >
        <pre>
          <code>
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

const Items = ({ children }: Props) => {
  return <section className={`code-box__items`}>{children}</section>;
};

CodeBox.Item = Item;
CodeBox.Toggle = Toggle;
CodeBox.Items = Items;
CodeBox.CopyToClipboard = CopyToClipboard;
