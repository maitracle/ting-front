export const getHeaderExample = (gender, group, step) => {
  if (gender === 'MALE') {
    switch (group) {
      case 'Group1':
        return;
      case 'Group2':
        return '예시)' +
          '얼굴은 선하고 순한 강아지상입니다. 동안이고 귀엽다는 이야기를 어렸을 적부터 종종(?!) 들어왔어요. ' +
          '그래서 나이가 27살로 제법 많은 편이지만, 기쁘게도 처음보시는 분들은 원래의 나이보다 몇 살 어리게 봐주시더라구요.' +
          '키는 귀엽다는 말이 무색하지 않게 170에 보통체형이며, 볼살과 애교살이 있는 편이에요!:D' +
          '그리고 감사하게도 목소리가 좋다는 이야기를 제가 속했던 모임이나 동아리에서 한 번씩 들어왔어요.' +
          '웃을 때는 선한 눈웃음이 생기곤 하며, 속쌍커풀을 가지고 있습니다.';
      case 'Group3':
        return;
      case 'Group4':
        return;
    }
  } else if (gender === 'FEMALE') {
    switch (group) {
      case 'Group1':
        return;
      case 'Group2':
        return;
      case 'Group3':
        return;
      case 'Group4':
        return;
    }
  }

};
