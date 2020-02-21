import React from 'react';
import { MobXProviderContext } from 'mobx-react';

// Todo(maitracle): useStores 걷어내기. mobx는 inject해서 사용하도록 한다.
export const useStores = () => React.useContext(MobXProviderContext);
