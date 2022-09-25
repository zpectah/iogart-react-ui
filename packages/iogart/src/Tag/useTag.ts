import { getElementClassName } from '@iogart-react-ui/utils';
import { useIogartTheme } from '@iogart-react-ui/styles';
import { useTagProps, useTagReturn } from './types';
import useTagStyles from './styles';

const useTag = (props: useTagProps) => {
  const { className, ...rest } = props;

  const theme = useIogartTheme();
  const classes = useTagStyles({ ...{}, theme });
  const updatedClassName = getElementClassName(className, ['iogart-Tag', classes.root], {
    ui: true,
  });

  const returnProps: useTagReturn = {
    className: updatedClassName,
    ...rest,
  };

  return returnProps;
};

export default useTag;
