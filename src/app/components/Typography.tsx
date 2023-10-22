import React, { ReactNode } from "react";

export const AnchorLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      className="inline-block text-[22px] tracking-wide hover:opacity-40 transition-all duration-150"
      target="_blank"
      title="Dusan Peric Github profile"
      href={href}
    >
      {children}
    </a>
  );
};

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="text-[22px] tracking-wide mb-5">{children}</h1>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-[22px] tracking-wide mb-5">{children}</p>
);

export const Copyright = ({ children }: { children: ReactNode }) => (
  <span className="text-xs tracking-wide">{children}</span>
);
