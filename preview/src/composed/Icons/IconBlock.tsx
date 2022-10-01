import React from 'react';
import { SvgIcon } from '@iogart-react-ui/types';

export interface IconBlockProps {
  name: string;
  node: (props: SvgIcon) => JSX.Element;
}

const IconBlock = (props: IconBlockProps) => {
  const { name, node } = props;

  const Elm = node;

  return (
    <div
      title={name}
      style={{
        width: '50px',
        height: '50px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Elm size={24} />
    </div>
  );
};

export default IconBlock;
