import React, { ReactNode, useEffect, useMemo } from 'react';

import { Container, ContainerProps } from '@iogart-react-ui/iogart';
import config from '../../config';
import { Header } from '../Header';
import LayoutHeading, { LayoutHeadingProps } from './LayoutHeading';
import { useLayoutStyles } from './style';

export interface LayoutProps {
  children?: ReactNode;
  variant?: 'default' | 'minimal';
  maxWidth?: ContainerProps['maxWidth'];
  meta?: {
    title?: string;
    subTitle?: string;
  };
  heading?: LayoutHeadingProps;
  withoutContainer?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { children, variant = 'default', maxWidth = 'xl', meta, heading, withoutContainer } = props;

  const classes = useLayoutStyles();

  const headingTitle = heading?.title && `${heading.title}${meta?.subTitle ? `: ${meta?.subTitle}` : ''}`;

  const renderContent = useMemo(() => {
    if (withoutContainer) {
      return <>{children}</>;
    }

    return <Container maxWidth={maxWidth}>{children}</Container>;
  }, [withoutContainer, children, maxWidth]);

  useEffect(() => {
    let title = config.globals.meta.title;
    if (meta) {
      if (meta.title) title = `${meta.title} | ${title}`;
      if (meta.subTitle) title = `${meta.subTitle} : ${title}`;
    }
    document.title = title;
  }, [meta]);

  return (
    <>
      {variant === 'default' && <Header />}
      <main className={[classes.root, `main--${variant}`].join(' ')}>
        {heading && (
          <LayoutHeading
            title={headingTitle}
            dashboardLink={heading.dashboardLink}
            node={heading?.node}
            actions={heading?.actions}
          />
        )}
        <div className={classes.content}>{renderContent}</div>
      </main>
    </>
  );
};

export default Layout;
