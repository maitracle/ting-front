import React from 'react';
import { Modal } from 'src/components/Modal/Modal';
import SelsoItemCard from 'src/modules/SelsoList/SelsoItemCard';


const skeletonBoySelsoItem = {
  nickname: '기다리는 철이',
  profile: {
    age: 22,
  },
  tags: '#우리 #만나면 #뭐하고 #놀까? #멋진 #사람을 #만나고 #싶어!',
  oneSentence: '우리 만날날을 기다리고 있어요. 기대해주세요!',
  image: require('src/assets/images/ManDefault.jpg'),
};

const skeletonGirlSelsoItem = {
  nickname: '기다리는 순이',
  profile: {
    age: 22,
  },
  tags: '#우리 #만나면 #뭐하고 #놀까? #멋진 #사람을 #만나고 #싶어!',
  oneSentence: '우리 만날날을 기다리고 있어요. 기대해주세요!',
  image: require('src/assets/images/WomanDefault.jpg'),
};

export const SelsoListSkeleton = ({ openDate, history }) => {
  return (
    <>
      <div>
        <SelsoItemCard selsoItem={skeletonBoySelsoItem} />
        <SelsoItemCard selsoItem={skeletonGirlSelsoItem} />
        <SelsoItemCard selsoItem={skeletonBoySelsoItem} />
        <SelsoItemCard selsoItem={skeletonGirlSelsoItem} />
        <SelsoItemCard selsoItem={skeletonBoySelsoItem} />
        <SelsoItemCard selsoItem={skeletonGirlSelsoItem} />
        <SelsoItemCard selsoItem={skeletonBoySelsoItem} />
        <SelsoItemCard selsoItem={skeletonGirlSelsoItem} />
      </div>
      <Modal
        isOpen={true}
        close={() => history.push('/')}
      >
        아직 정식 오픈 이전이에요. <br />
        { openDate.getMonth() + 1 }월 { openDate.getDate() }일을 기다려주세요.
      </Modal>
    </>
  );
};
