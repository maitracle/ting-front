import React, {
  useState, useCallback, useEffect,
} from 'react';
import Input from 'src/components/Form/Input';

import styles from './TagBox.module.scss';

const TagBox = ({ setTags }) => {
  const [tagList, setTagList] = useState([
    { id: 0, text: '' },
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
  ]);

  useEffect(() => {
    const stringTag = tagList.reduce((preValue, currentValue) => `${preValue} #${currentValue.text}`, '');
    setTags(stringTag.trim());
  }, [tagList]);

  const onChange = (tagId) => (e) => {
    setTagList(
      tagList.map((tag) => (tag.id === tagId ? { ...tag, text: e.target.value } : { ...tag })),
    );
  };


  const addTagInput = useCallback(
    () => {
      const maxLength = 10;
      if (tagList.length < maxLength) {
        const newTag = {
          id: tagList.length,
          text: '',
        };
        setTagList(tagList.concat(newTag));
      }
    }, [tagList],
  );

  const removeTagInput = useCallback(
    () => {
      const minLength = 4;
      if (tagList.length > minLength) {
        const restTagList = tagList.slice(0, (tagList.length - 1));
        setTagList(restTagList);
      }
    }, [tagList],
  );

  return (
    <div className={styles.tagWrapper}>
      <div className={styles.tagBoxWrapper}>
        {(tagList.map((tag) => (
          <div className={styles.tagForm}>
            <Input placeholder="나를 나타내는 태그!" value={tag.text} onChange={onChange(tag.id)} />
          </div>
        )))}
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonForm}>
          <button className={styles.button} onClick={addTagInput}>
            <span className={styles.title}>+</span>
          </button>
        </div>
        <div className={styles.buttonForm}>
          <button className={styles.button} onClick={removeTagInput}>
            <span className={styles.title}>-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagBox;
