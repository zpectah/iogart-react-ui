import { TagBaseProps } from '@iogart-react-ui/base';
import { IogartCommonUiProps } from '@iogart-react-ui/types';

export interface TagProps extends TagBaseProps, IogartCommonUiProps {}

export interface useTagParameters extends TagProps {}
export interface useTagReturn extends useTagParameters {}
