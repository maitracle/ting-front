import React, { useState } from 'react';
import { useStores } from 'src/utils/useStores';


export default () => {
  const { user } = useStores();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

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
    user.logIn(form.email, form.password)
      .then(res => {
        setMessage(res.message);
      })
  };

  const logOut = () => {
    user.logOut();
  };

  const fetchLikes = async () => {
    await user.fetchLikes();
  };

  return (
    <div>
      email: <input type='text' value={form.email} onChange={setEmail} /> <br />
      password: <input type='password' value={form.password} onChange={setPassword} />
      <button onClick={logIn}>login</button>
      <button onClick={logOut}>logout</button>
      <button onClick={fetchLikes}>fetchLikes</button>
      <div>{ message }</div>
    </div>
  );
};
