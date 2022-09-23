import React from 'react';

import config from '../../config';
import { PreviewItem } from '../Preview';
import { Layout } from '../../components';
import DashboardTile from './DashboardTile';
import { useDashboardStyles } from './styles';

const Dashboard = () => {
  const classes = useDashboardStyles();

  return (
    <Layout
      heading={{
        // title: 'Dashboard',
        node: <>... search bar ...</>,
      }}
    >
      <div className={classes.root}>
        {(config.previews as unknown as PreviewItem[]).map((preview) => (
          <DashboardTile key={preview.name} preview={preview} />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
