import React, { useState } from 'react';

import { useTagToggleStyles } from './style';

export interface TagToggleProps {
  tags?: string[];
  onChange?: (value: string[]) => void;
}

const TagToggle = (props: TagToggleProps) => {
  const { tags = [], onChange } = props;

  const [selected, setSelected] = useState<string[]>([]);

  const classes = useTagToggleStyles();

  const toggleHandler = (tag: string) => {
    const newArray = [...selected];
    const index = newArray.indexOf(tag);
    if (index > -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(tag);
    }
    setSelected(newArray);
    onChange && onChange(newArray);
  };

  return (
    <div className={classes.root}>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          role="button"
          onClick={() => toggleHandler(tag)}
          className={[classes.tag, selected.includes(tag) ? 'is--selected' : ''].join(' ')}
          children={tag}
        />
      ))}
    </div>
  );
};

export default TagToggle;
