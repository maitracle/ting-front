import React, { useState, useCallback, useEffect } from 'react';
import styles from './TagBox.module.scss';

// React.memo 는 tag 값이 바뀔 때만 리렌더링되도록 처리한다.
const TagItem = React.memo(({ tag, onRemove }) => <div className={styles.tag} onClick={() => onRemove(tag)}>{`#${tag}`}</div>);

const TagList = React.memo(({ tags, onRemove }) => (
  <div className={styles.tagListWrapper}>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </div>
));

const TagBox = ({ setTags }) => {
  const [input, setInput] = useState('');
  const [tagList, setTagList] = useState([]);

  const StringTag = tagList.reduce((preValue, currentValue) => `${preValue} #${currentValue}`, '');

  useEffect(() => {
    setTags(StringTag.trim());
  }, [StringTag]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; // 공백시 추가하지 않는다.
      if (tagList.includes(tag)) return; // 이미 존재하면 추가하지 않는다.
      setTagList([...tagList, tag]);
    },
    [tagList],
  );


  const onRemove = useCallback(
    (tag) => {
      setTagList(tagList.filter((t) => t !== tag));
    },
    [tagList],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);


  const onSubmit = useCallback(
    () => {
      insertTag(input.trim()); // trim은 앞뒤공백제거
      setInput('');
    },
    [input, insertTag],
  );
  return (
    <div className={styles.tagBoxWrapper}>
      <div className={styles.tagForm}>
        <input className={styles.input} placeholder="나를 나타내는 태그!" value={input} onChange={onChange} />
        <button className={styles.button} onClick={onSubmit} type="button">추가</button>
      </div>
      <TagList tags={tagList} onRemove={onRemove} />
    </div>
  );
};

export default TagBox;
