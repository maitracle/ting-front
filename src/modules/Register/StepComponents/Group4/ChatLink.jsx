import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';


const ChatLink = inject('registerStore')(
  observer(({ registerStore }) => {
    const setChatLink = (e) => registerStore.setRegisterData('chatLink', e.target.value);
    return (
      <div>
        <Input
          label="오픈채팅 링크를 알려주세요"
          placeholder="이성분이 연락 가능한 오픈 카카오톡 링크"
          value={registerStore.registerData.chatLink}
          onChange={setChatLink}
          type="Register"
        />
      </div>
    );
  }),
);

export default ChatLink;
