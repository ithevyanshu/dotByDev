import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authState } from "../atom/authState";

import axios from "axios";
import useTitle from "../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(authState);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const login = async () => {
    try {
      if (!formData.email || !formData.password) {
        setError('Please fill in all fields');
        return;
      }
      const res = await axios.post('http://localhost:3000/auth/login', formData);
      const accessToken = res.data;
      sessionStorage.setItem('accessToken', accessToken);
      setAuthState({
        isLogged: true,
        accessToken: accessToken
      });
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="px-2 py-1 text-center">
        <h1 className="pb-2 mb-10 border-b-2 text-4xl font-bold min-w-96">Todos</h1>
        <div className="text-xl flex flex-col">
          {error && <p className="text-red-500 text-base">*{error}</p>}
          <input className="border-2 my-2 p-1" type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          <input className="border-2 my-2 p-1" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          <button type="button" className="bg-gray-700 text-white font-bold py-2 mt-6" onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
