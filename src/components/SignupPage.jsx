import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/slices/authSlice';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [userdata, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const addUser = async () => {
    try {
      await addDoc(collection(db, 'user'), { user: userdata });
      toast.success("User registered successfully!", {
        position: "top-right",
        autoClose: 1000,
      });
      setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      toast.error("Error registering user!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (userdata.password !== userdata.confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    addUser();
    dispatch(signup({ username: userdata.username, email: userdata.email }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded border-0" style={{ maxWidth: '420px', width: '100%' }}>
        <h2 className="text-center fw-bold mb-3">Create an Account</h2>
        <p className="text-center text-muted">Join us and explore amazing deals</p>

        <form onSubmit={handleSignup}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              value={userdata.username}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={userdata.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={userdata.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userdata.confirmPassword}
              onChange={handleChange}
              required
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-lg">Sign Up</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <a href="/login" className="text-decoration-none fw-bold text-primary">Login</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
