import { PreviewItem } from '../Preview';
import { useState } from 'react';

import { compareFlatArrays } from '../../utils';

export interface useDashboardSearchProps {
  previews: PreviewItem[];
  model: {
    input: string,
    tags: string[],
  };
}

export interface useDashboardSearchReturn {
  filteredPreviews: PreviewItem[];
  tagList: string[];
}

const useDashboardSearch = (props: useDashboardSearchProps) => {
  const {
    previews,
    model,
  } = props;

  const getFilteredPreviews = () => {
    let newArray: PreviewItem[] = [];
    const inputTriggered = model.input !== '' && model.input.length > 3;
    const tagsTriggered = model.tags.length > 0;
    const filterTriggered = inputTriggered || tagsTriggered;
    if (filterTriggered) {
      previews.map((preview) => {
        if (inputTriggered) {
          const string = model.input.toLowerCase();
          const matcher = new RegExp(`.*${string}.*`);
          const matched = (preview.name.toLowerCase()).match(matcher)
            || (preview.path.toLowerCase()).match(matcher)
            || (preview.category.toLowerCase()).match(matcher)
            || (preview.meta.title.toLowerCase()).match(matcher)
            || (preview.meta.description.toLowerCase()).match(matcher)
            || (preview.meta.author.toLowerCase()).match(matcher);
          if (matched) newArray.push(preview);
        }
        if (tagsTriggered) {
          const versionMatch = model.tags.includes(`v${preview.meta.version}`);
          const tagsCompared = compareFlatArrays(model.tags, preview.tags).length > 0;
          if ((tagsCompared || versionMatch) && !newArray.includes(preview)) newArray.push(preview);
        }
      });

      return newArray;
    } else {
      return [ ...previews ];
    }
  };

  const getTagList = () => {
    const tags: string[] = [];
    previews.map((preview) => {
      if (tags.indexOf(`v${preview.meta.version}`) < 0) tags.push(`v${preview.meta.version}`);
      preview?.tags.map((tag) => {
        const index = tags.indexOf(tag);
        if (index < 0) tags.push(tag);
      });
    });

    return tags;
  };

  return {
    filteredPreviews: getFilteredPreviews(),
    tagList: getTagList(),
  } as useDashboardSearchReturn;
};

export default useDashboardSearch;
