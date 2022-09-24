import React, { ReactNode } from 'react';

import { ArrowBack } from '@iogart-react-ui/icons';
import { useLayoutHeadingStyles } from './styles';
import { Button } from '../ui';

export interface LayoutHeadingProps {
  title?: string;
  dashboardLink?: boolean;
  node?: ReactNode;
}

const LayoutHeading = (props: LayoutHeadingProps) => {
  const { title, dashboardLink, node } = props;

  const classes = useLayoutHeadingStyles();

  return (
    <div className={classes.root}>
      <div className={classes.primary}>
        {dashboardLink && (
          <Button to="/">
            {' '}
            <ArrowBack size="1.25rem" /> Back to dashboard
          </Button>
        )}
        {title && <h4>{title}</h4>}
      </div>
      {node && <div className={classes.secondary}>{node}</div>}
    </div>
  );
};

export default LayoutHeading;
