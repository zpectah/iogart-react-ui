import { getElementClassName } from '@iogart-react-ui/utils';
import { useStackProps, useStackReturn } from './types';
import useStackStyles from './styles';

const useStack = (props: useStackProps) => {
  const {
    className,
    spacing,
    direction,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    ...rest
  } = props;

  const classes = useStackStyles({
    spacing,
    direction,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
  });
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
