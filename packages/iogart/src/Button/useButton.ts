import { createElement } from 'react';
import { getElementClassName, capitalize } from '@iogart-react-ui/utils';
import { useIogartTheme, CLASSNAME_PREFIX } from '@iogart-react-ui/styles';
import { useButtonProps, useButtonReturn } from './types';
import { useButtonStyles } from './styles';

const useButton = (props: useButtonProps) => {
  const {
    color = 'primary',
    variant = 'text',
    size = 'medium',
    disabled = false,
    loading = false,
    pill = false,
    className,
    spinnerNode = 'Loading',
    ...rest
  } = props;

  const theme = useIogartTheme();
  const classes = useButtonStyles({ ...{ variant, size, disabled, loading, pill }, theme });
  const updatedClassName = getElementClassName(
    className,
    [
      `${CLASSNAME_PREFIX}Button`,
      `${CLASSNAME_PREFIX}Button-${capitalize(color)}${capitalize(size)}${capitalize(variant)}`,
      classes.root,
      classes[color],
    ],
    {
      ui: true,
      isDisabled: disabled,
      isLoading: loading,
    }
  );

  const loadingNode =
    loading &&
    createElement(
      'span',
      {
        tabIndex: 1,
        className: classes.loading,
      },
      spinnerNode
    );

  const returnProps: useButtonReturn = {
    className: updatedClassName,
    loadingNode,
    disabled,
    ...rest,
  };

  return returnProps;
};

export default useButton;
