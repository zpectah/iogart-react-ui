import React, {
  createElement,
  ComponentClass,
  useMemo,
  FunctionComponent,
  Attributes,
} from 'react';

import { Stack, Container, StackProps } from '@iogart-react-ui/iogart';
import { PreviewItem } from './types';
import { usePreviewDetailStyles } from './styles';

export interface PreviewDetailProps {
  detail?: PreviewItem | null;
}
export type NodeWrapperType =
  | FunctionComponent<Attributes>
  | ComponentClass<Attributes, PreviewItem>;

const PreviewDetail = (props: PreviewDetailProps) => {
  const { detail } = props;

  const classes = usePreviewDetailStyles();

  const preview = detail && createElement(detail.node as unknown as NodeWrapperType, detail.props);

  const renderPreview = useMemo(() => {
    if (detail?.layout === 'container') {
      return <Container maxWidth="xl">{preview}</Container>;
    } else if (detail?.layout) {
      const layout: string = detail?.layout;
      if (layout.match(/stack/)) {
        const stackProps: StackProps = {};
        if (layout.match(/:start/)) stackProps['justifyContent'] = 'flex-start';
        if (layout.match(/:center/)) stackProps['justifyContent'] = 'center';
        if (layout.match(/:end/)) stackProps['justifyContent'] = 'flex-end';

        return <Stack {...stackProps}>{preview}</Stack>;
      }
    }

    return <>{preview}</>;
  }, [detail]);

  return (
    <div className={classes.root}>
      <div className={classes.frame}>{detail && renderPreview}</div>
    </div>
  );
};

export default PreviewDetail;
