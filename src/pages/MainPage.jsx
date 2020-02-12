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

  return (
    <div>
      <Counter />
      <button onClick={openTestModal}>open modal</button>
      <Modal isOpen={isOpenTestModal} close={closeTestModal} />
    </div>
  );
}
