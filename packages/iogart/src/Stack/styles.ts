import { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { withIogartThemeProps } from '@iogart-react-ui/styles';
import {
  flexboxDirection,
  flexboxAlignContent,
  flexboxAlignItems,
  flexboxAlignSelf,
  flexboxJustifyContent,
  flexboxJustifyItems,
  flexboxJustifySelf,
} from '@iogart-react-ui/types';

interface useStackStylesProps extends withIogartThemeProps {
  spacing?: number;
  direction?: flexboxDirection;
  alignItems?: flexboxAlignItems;
  alignContent?: flexboxAlignContent;
  alignSelf?: flexboxAlignSelf;
  justifyContent?: flexboxJustifyContent;
  justifyItems?: flexboxJustifyItems;
  justifySelf?: flexboxJustifySelf;
}

const useStackStyles = createUseStyles<'root', useStackStylesProps>({
  root: ({ theme, ...rest }) => {
    const styles: CSSProperties = {
      display: 'flex',
      // backgroundColor: theme.palette.primary.main, // Example for theme
    };
    if (rest.spacing) styles.gap = rest.spacing;
    if (rest.direction) styles.flexDirection = rest.direction || 'row';
    if (rest.alignItems) styles.alignItems = rest.alignItems;
    if (rest.alignContent) styles.alignContent = rest.alignContent;
    if (rest.alignSelf) styles.alignSelf = rest.alignSelf;
    if (rest.justifyContent) styles.justifyContent = rest.justifyContent;
    if (rest.justifyItems) styles.justifyItems = rest.justifyItems;
    if (rest.justifySelf) styles.justifySelf = rest.justifySelf;

    return styles;
  },
});

export default useStackStyles;
