import React from 'react';
import { inject, observer } from 'mobx-react';
import TagBox from './TagBox';


const Tags = inject('registerStore')(
  observer(({ registerStore }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    return (
      <div>
        <TagBox setTags={setTags} />
      </div>
    );
  }),
);

export default Tags;
