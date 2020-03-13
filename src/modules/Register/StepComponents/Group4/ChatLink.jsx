import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group4.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const ChatLink = inject('registerStore')(
  observer(({ registerStore, history }) => {
    return (
      <>
        <div className={styles.componentWrapper}>
          <Input
            placeholder="이성분이 연락 가능한 오픈 카카오톡 링크"
            value={registerStore.registerData.chatLink}
            onChange={(e) => registerStore.setRegisterData('chatLink', e.target.value)}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={() => history.push('register/complete')} />
      </>
    );
  }),
);

export default ChatLink;
