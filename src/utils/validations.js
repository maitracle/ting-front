import { selsoFieldsMaxLengthLimit, tagsMinCountLimit, tagsMaxCountLimit } from "src/constants/fieldsLengthLimits";

export const getLengthValidationMessage = ( minLength, maxLength, data ) => {
  if (data.length < minLength) {
    return `${minLength}자 이상 입력해주세요.`;
  }
  else if (data.length > maxLength) {
    return `${maxLength}자 이하로 입력해주세요.`;
  }
  else {
    return '';
  }
};

export const getOneSentenceValidationMessage = (data) => {
  if (data.length === 0) {
    return '자신을 표현할 한 문장을 입력해주세요.';
  }
  else if (data.length > selsoFieldsMaxLengthLimit.OneSentence) {
    return `${selsoFieldsMaxLengthLimit.OneSentence}자 이하로 입력해주세요.`;
  }
  else {
    return '';
  }
};

export const getChatLinkValidationMessage = (data) => {
  const chatLinkRegExp = /^(https:\/\/open.kakao.com\/o\/([a-z]|[A-Z]|[0-9]){8})$/;

  if (data === '') {
    return '오픈 채팅방 링크를 입력해주세요.';
  }
  else if (chatLinkRegExp.test(data) === false) {
    return '형식에 맞게 입력해주세요.';
  }
  else if (chatLinkRegExp.test(data) === true) {
    return '';
  }
<<<<<<< HEAD
}

export const getTagsValidationMessage = (data) => {
  const tagRegExp = /#\S/;
  const isEveryTagsValid = data.split(/\s/).every(tag => tagRegExp.test(tag));
  
=======
};

export const getTagsValidationMessage = (data) => {
  const tagRegExp = /#\S/;
  const tagList = data.split(/\s/);
  const isEveryTagsValid = tagList.every(tag => tagRegExp.test(tag));
  const validTags = tagList.filter(tag => tagRegExp.test(tag));

>>>>>>> master
  if (data.length > selsoFieldsMaxLengthLimit.Tags) {
    return `${selsoFieldsMaxLengthLimit.Tags}자 이하로 입력해주세요.`;
  }
  if (isEveryTagsValid === false) {
    return '형식에 맞게 입력해주세요.';
  }
  
<<<<<<< HEAD
  const validTags = data.split(/\s/).filter(tag => tagRegExp.test(tag));
  const countTags = validTags.length;
  
  if (countTags < tagsMinCountLimit) {
    return '태그를 4개 이상 입력해주세요.';
  } else if (countTags > tagsMaxCountLimit) {
=======
  if (validTags.length < tagsMinCountLimit) {
    return '태그를 4개 이상 입력해주세요.';
  } else if (validTags.length > tagsMaxCountLimit) {
>>>>>>> master
    return '태그는 10개까지만 입력해주세요.';
  } else {
    return '';
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> master
