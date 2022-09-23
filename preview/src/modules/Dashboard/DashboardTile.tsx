import React from 'react';
import { Link } from 'react-router-dom';

import { PreviewItem } from '../Preview';
import { useDashboardTileStyles } from './styles';

export interface DashboardTileProps {
  preview: PreviewItem;
}

const DashboardTile = (props: DashboardTileProps) => {
  const { preview } = props;

  const classes = useDashboardTileStyles();

  return (
    <Link to={`/preview/${preview.path}`} className={classes.root}>
      <div className={classes.primary}>
        <h3
          title={`Author: ${preview.meta.author} | Version: ${preview.meta.version}`}
        >
          {preview.meta.title}
        </h3>
        {preview.meta.description && <p>{preview.meta.description}</p>}
      </div>
    </Link>
  );
};

export default DashboardTile;
