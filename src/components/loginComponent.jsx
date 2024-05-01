// LoginComponent.js
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Perform authentication logic (e.g., API call)
    // On successful authentication, dispatch login action
    dispatch(login({ username }));
  };

  return (
    <div>
      <input type="text" placeholder="enter user id"value={username} onChange={(e) => setUsername(e.target.value)} />
      <br /> <br />
      <input type="password" placeholder="password"value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
      <br /> <br />
    </div>
  );
};

export default LoginComponent;
