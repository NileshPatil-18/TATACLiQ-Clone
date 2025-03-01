import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import Search from './Search';
import Categories from './Categories';
import { FaShoppingCart, FaHeart, FaUser, FaSignOutAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.length);
  const wishlistItems = useSelector(state => state.wishlist.length);
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 sticky-top shadow">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
          <img 
            src="https://www.tatacliq.com/src/general/components/img/TCF_logo.svg" 
            alt="logo" 
            className="me-2" 
            style={{ height: "40px" }} 
          />
        </Link>

        {/* Search Bar */}
        <Search />

        {/* Navbar Toggler for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold px-3" to="/">Home</Link>
            </li>

            {/* Categories Dropdown */}
            <li className="nav-item">
              <Categories />
            </li>

            {/* Cart Icon */}
            <li className="nav-item position-relative">
              <Link className="nav-link text-white px-3" to="/cart">
                <FaShoppingCart size={22} />
                {isLoggedIn && cartItems > 0 && (
                  <span 
                    className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: "12px", padding: "4px 6px", borderRadius: "50%" }}
                  >
                    {cartItems}
                  </span>
                )}
              </Link>
            </li>

            {/* Wishlist Icon */}
            <li className="nav-item position-relative">
              <Link className="nav-link text-white px-3" to="/wishlist">
                <FaHeart size={22} className="text-danger" />
                {isLoggedIn && wishlistItems > 0 && (
                  <span 
                    className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: "12px", padding: "4px 6px", borderRadius: "50%" }}
                  >
                    {wishlistItems}
                  </span>
                )}
              </Link>
            </li>

            {/* User Profile / Logout */}
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white d-flex align-items-center px-3">
                    <FaUser className="me-1" /> {user.username}
                  </span>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-outline-light btn-sm ms-3 px-3 py-2" 
                    onClick={() => { dispatch(logout()); navigate('/'); }}
                  >
                    <FaSignOutAlt className="me-1" /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold px-3" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold px-3" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
