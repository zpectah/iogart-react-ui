import { getElementClassName } from '@iogart-react-ui/utils';
import { useIogartTheme } from '@iogart-react-ui/styles';
import { useButtonProps, useButtonReturn } from './types';
import { useButtonStyles } from './styles';

const useButton = (props: useButtonProps) => {
  const { className, color, ...rest } = props;

  const theme = useIogartTheme();
  const classes = useButtonStyles({ ...{ color }, theme });
  const updatedClassName = getElementClassName(className, ['iogart-Button', classes.root], {
    ui: true,
  });

  const returnProps: useButtonReturn = {
    className: updatedClassName,
    ...rest,
  };

  return returnProps;
};

export default useButton;
