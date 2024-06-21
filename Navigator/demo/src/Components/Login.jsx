import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    emailTouched: false,
    passwordTouched: false
  });

  const handleBlur = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [`${field}Touched`]: true
    }));
  };
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };
  const getBorderColor = (field) => {
    if (!formData[`${field}Touched`]) return '';
    return formData[field] ? 'green' : 'red';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://reqres.in/api/login',formData,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      const data = response.data;
      localStorage.setItem('token', data.token);
    })
    .catch(error => {
      console.error('There was an error logging in!', error);
    });
    setFormData({
      email: '',
      password: '',
      emailTouched: false,
      passwordTouched: false
    }); 
  
  };

const toggleSubmit = () => {
  setIsSubmitted(!isSubmitted);
  localStorage.removeItem("token");
};

  return (
    <div>
      <div className="outline">
        <h3>User-information</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder='Enter User-Email@*'
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            style={{ borderColor: getBorderColor('email') }}
          /><br /><br />
          <input
            type="password"
            placeholder='Enter Password*'
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            style={{ borderColor: getBorderColor('password') }}
          /><br /><br />
            
            <button className='btn'style={{ backgroundColor: isSubmitted ? "red" : "green",padding: "8px 45px",fontWeight: "bolder",color: "white"}} onClick={toggleSubmit}>{isSubmitted ? "Unsubmit" : "Submit"}</button> 
        </form>
      </div>
    </div>
  );
};

export default Login;
