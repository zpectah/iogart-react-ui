import { getElementClassName } from '@iogart-react-ui/utils';

import { useTagBaseProps, useTagBaseReturn } from './types';

const useTagBase = (props: useTagBaseProps) => {
  const { ...rest } = props;

  const updatedClassName = getElementClassName('', ['iogart-TagBase'], {
    base: true,
  });

  const returnProps: useTagBaseReturn = {
    className: updatedClassName,
    ...rest,
  };

  return returnProps;
};

export default useTagBase;
