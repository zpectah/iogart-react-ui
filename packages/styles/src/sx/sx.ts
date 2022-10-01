import { SxProps } from '@iogart-react-ui/types';

const sx = (props: SxProps) => {
  const { ...rest } = props;

  // sx formula on input
  // styles with breakpoints and etc as output

  return { ...rest };
};

export default sx;
