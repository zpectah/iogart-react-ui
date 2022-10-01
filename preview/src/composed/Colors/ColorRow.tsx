import React, { FC, ReactNode } from 'react';

export interface ColorRowProps {
  children?: ReactNode;
}

const ColorRow: FC<ColorRowProps> = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default ColorRow;
