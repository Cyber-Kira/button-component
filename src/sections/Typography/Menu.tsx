import React from "react";

const Header = ({
  children,
  level,
}: {
  level: number;
  children: React.ReactNode;
}) => {
  const h1 = <h1 className="typography__title--h1">{children}</h1>;
  const h2 = <h2 className="typography__title--h2">{children}</h2>;
  switch (level) {
    case 1:
      return h1;
    case 2:
      return h2;

    default:
      return h1;
  }
};

const Text = ({
  code,
  bold,
  children,
}: {
  code?: boolean;
  bold?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={`typography__text 
      ${code ? "typography__text-code" : ""} 
      ${bold ? "typography__text-bold" : ""}`}
    >
      {children}
    </span>
  );
};

const Paragraph = ({
  code,
  bold,
  children,
}: {
  code?: boolean;
  bold?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={`typography__paragraph 
      ${code ? "typography__paragraph-code" : ""} 
      ${bold ? "typography__paragraph-bold" : ""}`}
    >
      {children}
    </span>
  );
};

export const Typography = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Typography.Header = Header;
Typography.Text = Text;
Typography.Paragraph = Paragraph;
