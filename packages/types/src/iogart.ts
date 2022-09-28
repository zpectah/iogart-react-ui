import { CSSProperties } from 'react';

import { SxProps } from './sx';

export interface IogartBaseUi {
  tabIndex?: number | undefined;
  className?: string | undefined;
  style?: CSSProperties | undefined;
}

export interface IogartCommonUi {
  sx?: SxProps | undefined;
}
