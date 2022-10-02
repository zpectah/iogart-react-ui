import { createElement, useMemo } from 'react';
import { getElementClassName } from '@iogart-react-ui/utils';
import { useIogartTheme, CLASSNAME_PREFIX } from '@iogart-react-ui/styles';
import { IogartClickEvent, SvgIcon } from '@iogart-react-ui/types';
import { Close } from '@iogart-react-ui/icons';
import { useTagProps, useTagReturn } from './types';
import { useTagStyles } from './styles';

const useTag = (props: useTagProps) => {
  const {
    className,
    color = 'secondary',
    variant = 'contained',
    size = 'medium',
    pill = false,
    onClick,
    onClose,
    ...rest
  } = props;

  const theme = useIogartTheme();
  const classes = useTagStyles({ ...{ variant, size, pill, clickable: !!onClick }, theme });
  const updatedClassName = getElementClassName(className, [`${CLASSNAME_PREFIX}Tag`, classes.root, classes[color]], {
    ui: true,
  });

  const iconProps = useMemo(() => {
    let iSize = 18;
    if (size === 'small') iSize = 16;
    if (size === 'large') iSize = 20;

    return {
      size: iSize,
      onClick: onClose,
      className: classes.closeIcon,
    };
  }, [onClose, size]);

  const clickHandler = (e: IogartClickEvent<HTMLElement>) => {
    if (onClick && !(e.target instanceof SVGElement)) {
      onClick(e);
    } else {
      e.preventDefault();
    }
  };

  const closeNode = !!onClose && createElement(Close, iconProps as SvgIcon);

  const returnProps: useTagReturn = {
    className: updatedClassName,
    onClick: clickHandler,
    role: onClick ? 'button' : 'none',
    closeNode,
    ...rest,
  };

  return returnProps;
};

export default useTag;
