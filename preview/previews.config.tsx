import React from 'react';

import { Button, Container, Stack } from '@iogart-react-ui/iogart';

const commonMeta = {
  author: 'Tomas Sychra | zpecter.com',
  version: '0.0.0',
};

const previewsConfig = [
  {
    name: 'button',
    node: Button,
    path: 'button',
    category: 'components',
    tags: ['component', 'ui'],
    layout: 'stack:center',
    meta: {
      title: 'Button',
      description: 'Styled Button with events',
      ...commonMeta,
    },
    props: {
      children: 'Button demo children',
    },
  },
  {
    name: 'container',
    node: Container,
    path: 'container',
    category: 'components',
    tags: ['component', 'ui', 'content'],
    meta: {
      title: 'Container',
      description: 'Content responsive Container',
      ...commonMeta,
    },
    props: {
      children: (
        <>
          <div>children node</div>
        </>
      ),
    },
  },
  {
    name: 'stack',
    node: Stack,
    path: 'stack',
    category: 'components',
    tags: ['component', 'ui', 'content', 'flexbox'],
    layout: 'container',
    meta: {
      title: 'Stack',
      description: 'Content flexbox content wrapper with alignment',
      ...commonMeta,
    },
    props: {
      children: (
        <>
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </>
      ),
      spacing: 1,
      justifyContent: 'space-between',
    },
  },
];

export default previewsConfig;
