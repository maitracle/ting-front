import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group4.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import Modal from 'src/components/Modal';
import { getChatLinkValidationMessage } from 'src/utils/validations';


const ChatLink = inject('registerStore', 'userStore')(
  observer(({ registerStore, userStore, history, headerHeight }) => {
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [chatLinkValidationMessage, setChatLinkValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);
    
    const validateChatLink = (data) => {
      const validationMessage = getChatLinkValidationMessage(data);
      setChatLinkValidationMessage(validationMessage);

      return validationMessage === '';
    };

    const submit = () => {
      const isValid = validateChatLink(registerStore.registerData.chatLink);

      if (isValid) {
        registerStore.setRegisterData('profile', userStore.profile.id);
        registerStore.registerSelso()
          .then((res) => {
            if (res.status === 201) {
              history.push('register/complete');
            } else if (res.status >= 500) {
              setIsErrorModalOpen(true);
            }
          });
      }
    };

    const setMinHeight = {
      minHeight: `calc(${screenHeight}px - 44px - ${headerHeight}px - 125px)`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={setMinHeight}>
          <Input
            placeholder="이성분이 연락 가능한 오픈 카카오톡 링크"
            value={registerStore.registerData.chatLink}
            onChange={(e) => registerStore.setRegisterData('chatLink', e.target.value)}
            validationMessage={chatLinkValidationMessage}
            onFocus={() => setChatLinkValidationMessage('')}
            onBlur={() => validateChatLink(registerStore.registerData.chatLink)}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={submit} />
        <Modal
          isOpen={isErrorModalOpen}
          close={()=>setIsErrorModalOpen(false)}
        >
          <p>서버에서 오류가 발생하였습니다.</p>
          <p>잠시후에 다시 시도해주세요.</p>
        </Modal>
      </>
    );
  }),
);

export default ChatLink;
