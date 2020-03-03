import React from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';


const IsSmoke = inject('registerStore')(
  observer(({ registerStore }) => {
    const setIsSmoke = (e) => registerStore.setRegisterData('isSmoke', text);
    const [radios, setRadio] = useState([
      { id: 1, text: '' },
    ]);
    return (
      <div className="survey">
        <div className="anwserWrap">
          <p> IsSmokeIsSmokeIsSmoke흡연여부골라주세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
      </div>
    );
  }),
);

export default IsSmoke;
