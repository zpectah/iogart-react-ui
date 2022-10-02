import React from 'react';

import { Button, Container, Stack, Tag } from '@iogart-react-ui/iogart';
import { ArrowBack, ArrowForward } from '@iogart-react-ui/icons';
import { Colors, Icons, Typography } from './src/composed';

const commonMeta = {
  author: 'Tomas Sychra | zpecter.com',
  version: '0.0.0',
};

const previewsConfig = [
  {
    name: 'colors',
    node: Colors,
    category: 'theme',
    tags: ['theme', 'colors'],
    layout: 'container',
    meta: {
      title: 'Colors',
      description: 'Color palette',
      ...commonMeta,
    },
    props: {},
  },
  {
    name: 'icons',
    node: Icons,
    category: 'theme',
    tags: ['theme', 'icons'],
    layout: 'container',
    meta: {
      title: 'Icons',
      description: 'Theme Icons',
      ...commonMeta,
    },
    props: {},
  },
  {
    name: 'typography',
    node: Typography,
    category: 'theme',
    tags: ['theme', 'typography'],
    layout: 'container',
    meta: {
      title: 'Typography',
      description: 'Theme typography',
      ...commonMeta,
    },
    props: {},
  },
  {
    name: 'button',
    node: Button,
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
      color: 'success',
      // variant: 'contained',
      variant: 'outlined',
      // size: 'small',
      // disabled: true,
      startIcon: <ArrowBack />,
      endIcon: <ArrowForward />,
      // loading: true,
      pill: true,
    },
  },
  {
    name: 'tag',
    node: Tag,
    category: 'status',
    tags: ['component', 'ui'],
    layout: 'stack:center',
    meta: {
      title: 'Tag',
      description: 'Styled Tag with events',
      ...commonMeta,
    },
    props: {
      label: 'Tag name',
      color: 'success',
      // variant: 'contained',
      // variant: 'outlined',
      // pill: true,
      // size: 'large',
      // size: 'small',
      // onClick: (e: Event) => { console.log('clickable tag', e) },
      // onDoubleClick: (e: Event) => { console.log('clickable tag "DOUBLE"', e) },
      // onClose: (e: Event) => { console.log('on close tag', e) },
    },
  },
  {
    name: 'container',
    node: Container,
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
          <p>
            Maximus eget, arcu integer ut donec pellentesque nulla feugiat, molestie at dui suscipit. Sagittis euismod,
            vestibulum lacinia varius ac hendrerit sed id tortor tellus placerat, sed vitae ullamcorper auctor nec. Ut vel,
            sodales porttitor commodo mauris a proin in ex sem, ut hendrerit mattis nunc ac nec. Nisi commodo dui et tempus,
            consequat consequat libero vitae nunc augue rhoncus erat sodales, a consequat consequat sollicitudin. Nulla a
            euismod, rhoncus erat suspendisse aliquam dui et tempus ut nisl vel purus sapien, libero sed nulla a vitae sed. A
            lacinia consectetur, justo quis aliquam adipiscing fermentum augue mauris, sapien dui dui nunc.
            <br />
            Ornare risus, suspendisse aliquet non mauris fusce vitae ligula quis commodo, posuere lectus imperdiet vehicula.
            Erat id maximus, aenean aliquam iaculis molestie venenatis aliquet fusce ante, elementum non arcu nisi commodo.
            Vestibulum ligula, a volutpat eget nunc vitae lacinia vehicula, molestie posuere sapien curabitur. Arcu ornare,
            congue nulla rhoncus rutrum justo aliquam suscipit adipiscing, nunc felis a maximus quam. Ornare cras dictum,
            metus pharetra sed porttitor fermentum venenatis tristique fringilla, imperdiet bibendum vel sollicitudin. Sem
            facilisis, porttitor varius lectus feugiat in donec ut hendrerit nisl vel purus, libero ac nec donec varius.
          </p>
        </>
      ),
      maxWidth: 'md',
    },
  },
  {
    name: 'stack',
    node: Stack,
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
