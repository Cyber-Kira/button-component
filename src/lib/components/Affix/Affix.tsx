import React from "react";

interface Props {
  children: React.ReactNode;
  offsetTop?: string;
}

export const Affix = ({ children, offsetTop = "0" }: Props) => {
  return (
    <div className="affix" style={{ top: `${offsetTop}px` }}>
      {children}
    </div>
  );
};
