import { useState } from 'react';
import { getElementClassName } from '@iogart-react-ui/utils';
import { useIogartTheme, CLASSNAME_PREFIX } from '@iogart-react-ui/styles';
import { IogartFocusEvent } from '@iogart-react-ui/types';
import { useButtonBaseProps, useButtonBaseReturn } from './types';
import { useButtonBaseStyles } from './styles';

const useButtonBase = (props: useButtonBaseProps) => {
  const { className, onFocus, onBlur, ...rest } = props;

  const [isFocus, setFocus] = useState(false);

  const theme = useIogartTheme();
  const classes = useButtonBaseStyles({ ...{}, theme });
  const updatedClassName = getElementClassName(className, [`${CLASSNAME_PREFIX}ButtonBase`, classes.root], {
    isFocus,
    base: true,
  });

  const focusHandler = (event: IogartFocusEvent) => {
    setFocus(true);
    if (onFocus) onFocus(event);
  };
  const blurHandler = (event: IogartFocusEvent) => {
    setFocus(false);
    if (onBlur) onBlur(event);
  };

  const updatedEvents = {
    onBlur: blurHandler,
    onFocus: focusHandler,
  };

  const returnProps: useButtonBaseReturn = {
    className: updatedClassName,
    ...updatedEvents,
    ...rest,
  };

  return returnProps;
};

export default useButtonBase;
