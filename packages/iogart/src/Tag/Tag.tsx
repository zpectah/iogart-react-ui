import React, { FC, createElement, useMemo } from 'react';
import { TagProps } from './types';
import useTag from './useTag';

const Tag: FC<TagProps> = (props) => {
  const { label, onClick, onClose, ...rest } = props;

  const { closeNode, ...updatedProps } = useTag({ onClick, onClose, ...rest });

  const renderChildren = useMemo(() => {
    if (onClose) {
      return (
        <>
          {label}
          {closeNode}
        </>
      );
    }

    return label;
  }, [label, onClose]);

  return createElement(
    'span',
    {
      ...updatedProps,
    },
    renderChildren
  );
};

export default Tag;
