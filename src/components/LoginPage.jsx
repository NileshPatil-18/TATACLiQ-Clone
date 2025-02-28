import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/authSlice';
import { collection, onSnapshot,query } from 'firebase/firestore';
import{db} from '../firebase'
import { ToastContainer,toast } from 'react-toastify';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


const [user,setUser] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault();

     await checkUserCredentials();
  };
  

  const getAllusers = async()=>{
    const q = query(collection(db,'user'));
    const users = onSnapshot(q,(QuerySnapshot)=>{
      let userArray = [];
      QuerySnapshot.forEach((doc)=>{
        userArray.push({...doc.data(),id:doc.id})
      })
      setUser(userArray)
    });
    return users;
  }
  
  const checkUserCredentials = async() =>{
   await getAllusers();
   let foundUser = null;
    for(let i=0; i<user.length; i++ ){
      if(user[i].user.username !== username || user[i].user.password !== password){
        toast.error('Invalid Credentials', {
          position: 'top-right',
          autoClose: 2000,
        });
        break;
      } else{
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 2000,
        });
        localStorage.setItem('user', JSON.stringify(foundUser));
        navigate('/');
    }
    }
  }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-3">Welcome Back!</h2>
        <p className="text-center text-muted">Sign in to continue</p>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-0">Don't have an account? <Link to="/signup" className="text-primary">Register here</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};


export default LoginPage;
