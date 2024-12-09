import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault();

    const {email, password} = data;
    try {
     // Send POST request to backend
     const response = await axios.post('/login', {
      email,
      password,
    });

    if (response.data.error) {
        toast.error(response.data.error);
    } else {
        setData({ email: '', password: '' });
        toast.success("Login successful!");
        navigate('/'); // Redirect to home page
    }
    } catch (error) {
      // Handle any error that occurs during the request
      console.error("Error during login:", error);
      // Optionally show an error message to the user
    }
};


  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}></input>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}></input>

        <button type = 'submit' className='btn_secondary'>Login</button>
      </form>
    </div>
  )
}
