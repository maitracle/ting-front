import React, { useState } from 'react';
import Counter from '../components/StoreComponent';
import { Modal } from 'src/components/Modal';


export default () => {
  const [isOpenTestModal, setIsOpenTestModal] = useState(false);

  const openTestModal = () => {
    setIsOpenTestModal(true);
  };
  const closeTestModal = () => {
    setIsOpenTestModal(false);
  };

  const alertMethod = () => {
    alert('눌렀다!!!')
  };

  return (
    <div>
      <Counter />
      <button onClick={openTestModal}>open modal</button>
      <Modal
        isOpen={isOpenTestModal} close={closeTestModal}
        buttonList={[<button onClick={alertMethod} key={'testButton'}>alert button</button>]}
      >
        <div>children1</div>
        <div>children2</div>
        <div>children3</div>
      </Modal>
    </div>
  );
}
