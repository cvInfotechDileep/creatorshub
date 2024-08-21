"use client"

import { useState } from 'react';
import { signinApi } from '../../apis/api';
import { useDispatch } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '@/redux/slices/authSlice';

export default function SignIn() {
    const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInStart());

    try {
      const response = await signinApi({ email, password });
      const { status, token, user_type, data } = response.data;

      if (status) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_type', user_type);
        localStorage.setItem('username', data[0].username);
        dispatch(signInSuccess({ token, user_type, data }));

        //  Redirect based on user_type to the specific username path
        if (user_type === 'fan') {
          window.location.href = `/user/${data[0].username}`;
        } else if (user_type === 'creator') {
          window.location.href = `/creator/${data[0].username}`;
        } else if (user_type === 'admin') {
          window.location.href = `/admin/${data[0].username}`;
        }
      } else {
        dispatch(signInFailure('Sign-in failed'));
        setError("Sign-in failed")
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

