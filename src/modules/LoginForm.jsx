import React, { useState } from 'react';
import { useStores } from 'src/utils/useStores';


export default () => {
  const { user } = useStores();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const setEmail = (e) => {
    setForm({
      email: e.target.value,
      password: form.password,
    });
  };

  const setPassword = (e) => {
    setForm({
      email: form.email,
      password: e.target.value,
    });
  };

  const logIn = () => {
    user.logIn(form.email, form.password).then((output) => {
      console.log(output);
    });
  };

  const logOut = () => {
    // console.dir(window.location);
    // console.dir(window.location.origin);
    // console.dir(window.location.pathname);
    //
    localStorage.setItem('access', 'asdfasdf');
    // user.logOut();
  };

  const getTokenFromLocalStorage = () => {
    console.log('refresh', localStorage.getItem('refresh'));
    console.log('access', localStorage.getItem('access'));
  };

  const fetchLikes = () => {
    user.fetchLikes();
  };

  return (
    <div>
      email: <input type='text' value={form.email} onChange={setEmail} /> <br />
      password: <input type='password' value={form.password} onChange={setPassword} />
      <button onClick={logIn}>login</button>
      <button onClick={getTokenFromLocalStorage}>check</button>
      <button onClick={logOut}>logout</button>
      <button onClick={fetchLikes}>fetchLikes</button>
    </div>
  );
};
