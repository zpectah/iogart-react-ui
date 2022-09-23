import { getElementClassName } from '@iogart-react-ui/utils';
import { useButtonProps, useButtonReturn } from './types';
import useButtonStyles from './styles';

const useButton = (props: useButtonProps) => {
  const { className, ...rest } = props;

  const classes = useButtonStyles();
  const updatedClassName = getElementClassName(
    className,
    ['iogart-Button', classes.root],
    {
      ui: true,
    }
  );

  const returnProps: useButtonReturn = {
    className: updatedClassName,
    ...rest,
  };

  return returnProps;
};

export default useButton;
