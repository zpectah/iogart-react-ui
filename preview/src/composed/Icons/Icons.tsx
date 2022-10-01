import React from 'react';
import IconRow from './IconRow';
import IconBlock from './IconBlock';
import { ArrowBack, ArrowDownward, ArrowForward, ArrowUpward, Check, Close, ExpandLess, ExpandMore, Home, Menu, Search, Settings, SpinnerPuff, SpinnerThreeDots } from '@iogart-react-ui/icons';

const Icons = () => {
  const iconList = [
    {
      name: 'ArrowBack',
      node: ArrowBack,
    },
    {
      name: 'ArrowDownward',
      node: ArrowDownward,
    },
    {
      name: 'ArrowForward',
      node: ArrowForward,
    },
    {
      name: 'ArrowUpward',
      node: ArrowUpward,
    },
    {
      name: 'Check',
      node: Check,
    },
    {
      name: 'Close',
      node: Close,
    },
    {
      name: 'ExpandLess',
      node: ExpandLess,
    },
    {
      name: 'ExpandMore',
      node: ExpandMore,
    },
    {
      name: 'Home',
      node: Home,
    },
    {
      name: 'Menu',
      node: Menu,
    },
    {
      name: 'Search',
      node: Search,
    },
    {
      name: 'Settings',
      node: Settings,
    },
  ];
  const spinnerList = [
    {
      name: 'SpinnerPuff',
      node: SpinnerPuff,
    },
    {
      name: 'SpinnerThreeDots',
      node: SpinnerThreeDots,
    },
  ];

  return (
    <div>
      <IconRow>
        {iconList.map((icon) => (
          <IconBlock
            key={icon.name}
            name={icon.name}
            node={icon.node}
          />
        ))}
      </IconRow>
      <IconRow>
        {spinnerList.map((icon) => (
          <IconBlock
            key={icon.name}
            name={icon.name}
            node={icon.node}
          />
        ))}
      </IconRow>
    </div>
  );
};

export default Icons;
