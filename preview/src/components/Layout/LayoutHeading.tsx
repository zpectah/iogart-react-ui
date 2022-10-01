import React, { ReactNode } from 'react';

import { ArrowBack } from '@iogart-react-ui/icons';
import { useLayoutHeadingStyles } from './style';
import { Button } from '../ui';

export interface LayoutHeadingProps {
  title?: string;
  dashboardLink?: boolean;
  node?: ReactNode;
  actions?: ReactNode;
}

const LayoutHeading = (props: LayoutHeadingProps) => {
  const { title, dashboardLink, node, actions } = props;

  const classes = useLayoutHeadingStyles();

  return (
    <div className={classes.root}>
      <div className={classes.primary}>
        {dashboardLink && (
          <Button to="/" spaced={false}>
            <ArrowBack size="24" />
          </Button>
        )}
        {title && <h4>{title}</h4>}
        {actions && actions}
      </div>
      {node && <div className={classes.secondary}>{node}</div>}
    </div>
  );
};

export default LayoutHeading;
