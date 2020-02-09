import React from 'react';
import { useStores } from 'src/utils/useStores';


export default () => {
  const { user } = useStores();

  const logIn = () => {
    user.logIn().then((output) => {
      console.log(output);
    });
  };
  const logOut = () => {
    user.logOut();
  };

  const getTokenFromLocalStorage = () => {
    console.log('refresh', localStorage.getItem('refresh'));
    console.log('access', localStorage.getItem('access'));
  };

  return (
    <div>
      id: <input type='text' />
      password: <input type='text' />
      <button onClick={logIn}>login</button>
      <button onClick={getTokenFromLocalStorage}>check</button>
      <button onClick={logOut}>logout</button>
    </div>
  );
};
