import { getElementClassName } from '@iogart-react-ui/utils';
import { useIogartTheme } from '@iogart-react-ui/styles';
import { useContainerProps, useContainerReturn } from './types';
import useContainerStyles from './styles';

const useContainer = (props: useContainerProps) => {
  const { className, maxWidth = 'xl', fluid, ...rest } = props;

  const theme = useIogartTheme();
  const classes = useContainerStyles({ ...{}, theme });
  const updatedClassName = getElementClassName(
    className,
    [
      'iogart-Container',
      classes.root,
      fluid ? 'iogart-Container-fluid' : '',
      maxWidth && !fluid ? `iogart-Container-${maxWidth}` : '',
      maxWidth && !fluid ? classes[maxWidth] : '',
    ],
    {
      ui: true,
    }
  );

  const returnProps: useContainerReturn = {
    className: updatedClassName,
    ...rest,
  };

  return returnProps;
};

export default useContainer;
