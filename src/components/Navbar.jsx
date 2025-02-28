import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout, } from '../redux/slices/authSlice';
import Search from './Search';

const Navbar = ({ setFilteredProducts }) => {
  const cartItems = useSelector(state => state.cart.length);
  const wishlistItems = useSelector(state => state.wishlist.length);
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src="https://www.tatacliq.com/src/general/components/img/TCF_logo.svg" alt="logo" className='p-3' />
        </Link>
       <Search setFilteredProducts={setFilteredProducts}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {isLoggedIn ? (
               <li className="nav-item">
               <Link className="nav-link" to="/cart">Cart ({cartItems})</Link>
             </li>
            ):(
              <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart ({0})</Link>
            </li>
            ) }

            {isLoggedIn? (
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">Wishlist ({wishlistItems})</Link>
            </li>
            ):(
              <li className="nav-item">
              <Link className="nav-link" to="/wishlist">Wishlist ({0})</Link>
            </li>
            )
            }
            <li className='nav-item'>
              <Link className='nav-link' to='/signup'>SignUp</Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item text-design-none text-color-primary">
                <span className="nav-link">Hello, {user.username}</span>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={() => dispatch(logout())}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;