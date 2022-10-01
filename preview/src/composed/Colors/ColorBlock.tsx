import React, { CSSProperties, useMemo } from 'react';

export interface ColorBlockProps {
  backgroundColor: string;
  color: string;
  label?: string;
  bordered?: boolean;
}

const ColorBlock = (props: ColorBlockProps) => {
  const { backgroundColor, color, label = 'Label', bordered } = props;

  const blockStyles = useMemo(() => {
    const ps = {
      width: 'calc(100% / 6 - 1rem)',
      height: '50px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '.9rem',
      position: 'relative',
      overflow: 'hidden',
    } as CSSProperties;

    if (bordered) {
      return {
        color: backgroundColor,
        border: `1px solid ${backgroundColor}`,
        ...ps,
      };
    }

    return {
      color,
      backgroundColor,
      border: `1px solid ${backgroundColor}`,
      ...ps,
    };
  }, [bordered, color, backgroundColor]);

  return <div style={blockStyles}>{label}</div>;
};

export default ColorBlock;
