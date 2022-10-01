import React, { FC, ReactNode } from 'react';

export interface IconRowProps {
  children?: ReactNode;
}

const IconRow: FC<IconRowProps> = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        width: '100%',
        marginBottom: '4rem',
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

export default IconRow;
