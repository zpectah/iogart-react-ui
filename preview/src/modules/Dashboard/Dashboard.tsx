import React, { useState } from 'react';

import config from '../../config';
import { PreviewItem } from '../Preview';
import { Layout } from '../../components';
import DashboardTile from './DashboardTile';
import { DashboardSearch } from './DashboardSearch';
import useDashboardSearch from './useDashboardSearch';
import { useDashboardStyles } from './style';

const Dashboard = () => {
  const classes = useDashboardStyles();

  const [searchModel, setSearchModel] = useState<{ input: string; tags: string[] }>({
    input: '',
    tags: [],
  });

  const { tagList, filteredPreviews } = useDashboardSearch({
    previews: config.previews as unknown as PreviewItem[],
    model: searchModel,
  });

  return (
    <Layout
      heading={{
        node: <DashboardSearch onChange={setSearchModel} tagList={tagList} />,
      }}
    >
      <div className={classes.root}>
        {filteredPreviews.map((preview) => (
          <DashboardTile key={preview.name} preview={preview} />
        ))}
        {filteredPreviews.length === 0 && <span>Nothing for '{searchModel.input}' was found</span>}
      </div>
    </Layout>
  );
};

export default Dashboard;
