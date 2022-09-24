import React from 'react';

import { Button, Container, Stack, Tag } from '@iogart-react-ui/iogart';

const commonMeta = {
  author: 'Tomas Sychra | zpecter.com',
  version: '0.0.0',
};

const previewsConfig = [
  {
    name: 'button',
    node: Button,
    path: 'button',
    category: 'action',
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
    name: 'tag',
    node: Tag,
    path: 'tag',
    category: 'status',
    tags: ['component', 'ui'],
    layout: 'stack:center',
    meta: {
      title: 'Tag',
      description: 'Styled Tag with events',
      ...commonMeta,
    },
    props: {
      children: 'Tag name',
    },
  },
  {
    name: 'container',
    node: Container,
    path: 'container',
    category: 'layout',
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
    category: 'layout',
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
