import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    contact: '',
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

  const signup = async () => {
    try{
      if (!formData.firstName || !formData.lastName || !formData.username || !formData.email || !formData.contact || !formData.password) {
        setError('Please fill in all fields');
        return;
      }
      await axios.post('http://localhost:3000/auth/signup', formData);
      navigate('/login');
    }
    catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="px-2 py-1 text-center">
        <h1 className="pb-2 mb-10 border-b-2 text-4xl font-bold">dotDEV</h1>
        <div className="text-xl flex flex-col">
          {error && <p className="text-red-500 text-base">*{error}</p>}
          <div>
            <input className="border-2 my-2 p-1 min-w-fit" type="text" name="first" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            <input className="border-2 my-2 p-1" type="text" name="last" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <input className="border-2 my-2 p-1" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
          <input className="border-2 my-2 p-1" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
          <input className="border-2 my-2 p-1" type="text" name="contact" placeholder="Contact (+91)" value={formData.contact} onChange={handleInputChange} />
          <input className="border-2 my-2 p-1" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          <button type="submit" className="bg-gray-700 text-white font-bold py-2 mt-6" onClick={signup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
