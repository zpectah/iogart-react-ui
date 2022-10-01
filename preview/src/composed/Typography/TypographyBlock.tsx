import React, { FC, createElement, ReactNode, CSSProperties } from 'react';

export interface TypographyBlockProps {
  children: ReactNode;
  style: CSSProperties;
  elementType?: string;
  caption?: string;
}

const TypographyBlock: FC<TypographyBlockProps> = (props) => {
  const { children, style, elementType = 'div', caption } = props;

  const node = createElement(elementType, { style }, children);

  return (
    <figure
      style={{
        width: '100%',
        marginBottom: '2rem',
      }}
    >
      {caption && <figcaption>{caption}</figcaption>}
      {node}
    </figure>
  );
};

export default TypographyBlock;
