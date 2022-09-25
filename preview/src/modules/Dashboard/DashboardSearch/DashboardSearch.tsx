import React, { useState } from 'react';

import { Input, TagToggle } from '../../../components';
import { useDashboardSearchStyles } from './style';

export interface DashboardSearchProps {
  onChange: (props: { input: string; tags: string[] }) => void;
  tagList: string[];
}

const DashboardSearch = (props: DashboardSearchProps) => {
  const { onChange, tagList = [] } = props;

  const classes = useDashboardSearchStyles();

  const [inputValue, setInputValue] = useState<string>('');
  const [tagsValue, setTagsValue] = useState<string[]>([]);

  const inputChangeHandler = (value: string) => {
    const model = {
      input: value,
      tags: tagsValue,
    };
    setInputValue(value);
    onChange(model);
  };

  const tagsChangeHandler = (value: string[]) => {
    const model = {
      input: inputValue,
      tags: value,
    };
    setTagsValue(value);
    onChange(model);
  };

  return (
    <div className={classes.root}>
      <Input
        value={inputValue}
        onChange={(e) => inputChangeHandler(e.target.value)}
        placeholder="Type to search"
        style={{
          width: '40%',
        }}
      />
      <TagToggle tags={tagList} onChange={tagsChangeHandler} />
    </div>
  );
};

export default DashboardSearch;
