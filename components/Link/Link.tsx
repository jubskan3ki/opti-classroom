import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href}>
      {children}
    </a>
  );
};

export default Link;