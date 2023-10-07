import React, { useState } from 'react'
import './controlledForms.css';

export const ControlledForms = () => {

//   const [name, setName] = useState('John Doe');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });   

  const changePassword = (event) => {
    // setPassword(event.target.value);
    setFormData({ ...formData, password: event.target.value})
  }

  const registerUser = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
        <form onSubmit={registerUser}>
            <h1>Signup Form</h1>
            <div className='form-control'>
                <label htmlFor="">Full Name</label>
                <input type="text" value={formData.name} onChange={(event) => setFormData({
                    ...formData,
                    name: event.target.value
                })} placeholder='Please enter your name' />
            </div>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" value={formData.email} onChange={(event) => setFormData({
                    ...formData,
                    email: event.target.value
                })} placeholder='Please enter your Email' />
            </div>
            <div className='form-control'>
                <label htmlFor="">Password</label>
                <input type="password" value={formData.password} onChange={changePassword}  placeholder='Please enter your Password' />
            </div>

            <button>Register</button>
        </form>
    </div>
  )
}
