import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/slices/authSlice';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer,toast } from 'react-toastify';

const SignupPage = () => {
  const [userdata, seruserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const addUser = async()=>{
    try {
      const docRef = await addDoc(collection(db ,'user'),{
          user : userdata
      })
      toast.success("User registered succesfully",{
              position: "top-right",
              autoClose: 2000,  
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined, 
            });
            console.log("user added succesfully",docRef.id);
    } catch (error) {
      console.error("Error adding user info",error)
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    seruserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (userdata.password !== userdata.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    addUser();
    dispatch(signup({ username: userdata.username, email: userdata.email }));
    navigate('/login');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 rounded border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter username"
              value={userdata.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={userdata.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={userdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm password"
              value={userdata.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3">Already have an account? <a href="/login" className="text-decoration-none">Login</a></p>
      </div>
    </div>
  );
};

export default SignupPage;
