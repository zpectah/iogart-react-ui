import { getElementClassName } from '@iogart-react-ui/utils';
import { useIogartTheme } from '@iogart-react-ui/styles';
import { useStackProps, useStackReturn } from './types';
import useStackStyles from './styles';

const useStack = (props: useStackProps) => {
  const {
    className,
    spacing = 1,
    direction,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    ...rest
  } = props;

  const theme = useIogartTheme();
  const classes = useStackStyles({ ...{
      spacing,
      direction,
      alignContent,
      alignItems,
      alignSelf,
      justifyContent,
      justifyItems,
      justifySelf,
    }, theme });
  const updatedClassName = getElementClassName(className, ['iogart-Stack', classes.root], {
    ui: true,
  });

  const returnProps: useStackReturn = {
    className: updatedClassName,
    ...rest,
  };

  return returnProps;
};

export default useStack;
