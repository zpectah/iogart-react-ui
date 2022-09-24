import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import config from '../../config';
import { Layout } from '../../components';
import { PreviewItem } from './types';
import PreviewDetail from './PreviewDetail';
import { usePreviewStyles } from './styles';

const Preview = () => {
  const params = useParams();
  // const [detailTmp, setDetailTmp] = useState<PreviewItem | null>(null);
  const [subTitle, setSubTitle] = useState('');

  const classes = usePreviewStyles();

  const renderDetail = useMemo(() => {
    const id = params.id;
    const detail = config.previews.find((preview) => preview.path === id);
    if (detail) {
      setSubTitle(detail.meta.title);
      // setDetailTmp(detail as PreviewItem);
      return <PreviewDetail detail={detail as PreviewItem} />;
    } else {
      return (
        <div className={classes.notFound}>
          Detail not exist
          <br />
          <Link to="/">Back to dashboard</Link>
        </div>
      );
    }
  }, [params]);

  return (
    <Layout
      meta={{
        title: 'Preview',
        subTitle,
      }}
      heading={{
        title: 'Preview',
        dashboardLink: true,
      }}
      withoutContainer
    >
      {renderDetail}
    </Layout>
  );
};

export default Preview;
