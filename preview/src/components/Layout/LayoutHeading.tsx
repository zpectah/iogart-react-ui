import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack } from '@iogart-react-ui/icons';
import { useLayoutHeadingStyles } from './styles';

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
        {dashboardLink && <Link to="/"> <ArrowBack /> Back to dashboard</Link>}
        {title && (
          <h4>
            {title}
          </h4>
        )}
      </div>
      {node && <div className={classes.secondary}>{node}</div>}
    </div>
  );
};

export default LayoutHeading;
