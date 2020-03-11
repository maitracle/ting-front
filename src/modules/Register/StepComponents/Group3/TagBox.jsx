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

  const StringTag = tagList.reduce((preValue, currentValue) => `${preValue} #${currentValue.text}`, '');
  useEffect(() => {
    setTags(StringTag.trim());
  }, [tagList]);

  const onChange = (key) => (e) => {
    setTagList(
      tagList.map((tag) => (tag.id === key ? { ...tag, text: e.target.value } : { ...tag })),
    );
  };

  // useRef는 순전히 새로운 값을 만들기 위해만 사용되는 값을(렌더링되는 정보가 아닌 값)을 관리할 때 사용
  const nextId = useRef(4);

  const onInsert = useCallback(
    () => {
      const newTag = {
        id: nextId.current,
        text: '',
      };
      setTagList(tagList.concat(newTag));
      nextId.current += 1;
    }, [tagList],
  );

  const onRemove = useCallback(
    () => {
      const removeTag = tagList.slice(0, (nextId.current - 1));
      setTagList(removeTag);
      nextId.current -= 1;
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
