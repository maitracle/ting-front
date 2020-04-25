import { tagsMinCountLimit, tagsMaxCountLimit } from "src/constants/fieldsLengthLimits";

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
}

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
}

export const getTagsValidationMessage = (data) => {
  const tagRegExp = /#\S/;

  const validTags = data.split(/\s/).filter(tag => tagRegExp.test(tag));
  const countTags = validTags.length;

  if (countTags < tagsMinCountLimit) {
    return '태그를 4개 이상 입력해주세요.';
  } else if (countTags > tagsMaxCountLimit) {
    return '태그는 10개까지만 입력해주세요.';
  } else {
    return '';
  }
}
