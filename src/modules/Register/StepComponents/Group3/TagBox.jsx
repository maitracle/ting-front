import React, {
  useState, useRef, useCallback, useEffect,
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
    const StringTag = tagList.reduce((preValue, currentValue) => `${preValue} #${currentValue.text}`, '');
    setTags(StringTag.trim());
  }, [tagList]);

  const onChange = (key) => (e) => {
    setTagList(
      tagList.map((tag) => (tag.id === key ? { ...tag, text: e.target.value } : { ...tag })),
    );
  };


  const onInsert = useCallback(
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

  const onRemove = useCallback(
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
          <button className={styles.button} onClick={onInsert}>
            <span className={styles.title}>+</span>
          </button>
        </div>
        <div className={styles.buttonForm}>
          <button className={styles.button} onClick={onRemove}>
            <span className={styles.title}>-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagBox;
