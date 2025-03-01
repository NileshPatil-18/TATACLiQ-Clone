import React from "react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5 pt-4">
      <div className="container">
        {/* Top Icons Section */}
        <div className="row text-center mb-4">
          <div className="col-md-4">
            
            <p className="mt-2 fw-semibold">Authentic Brands</p>
          </div>
          <div className="col-md-4">
            
            <p className="mt-2 fw-semibold">Easy Returns</p>
          </div>
          <div className="col-md-4">
           
            <p className="mt-2 fw-semibold">Easy Payments</p>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-start">
          <div className="col mb-4">
            <h6 className="fw-bold">Tata Marketplace</h6>
            <ul className="list-unstyled">
              {["About Us", "Careers", "Sell With Us", "Terms of Use", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-dark text-decoration-none d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col mb-4">
            <h6 className="fw-bold">Customer Service</h6>
            <ul className="list-unstyled">
              {["Shopping", "Offers & Promotions", "Payments", "Returns & Refunds", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-dark text-decoration-none d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col mb-4">
            <h6 className="fw-bold">My Tata Cliq</h6>
            <ul className="list-unstyled">
              {["My Account", "My Orders", "My Shopping Bag", "My Wishlist"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-dark text-decoration-none d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col mb-4">
            <h6 className="fw-bold">Tata Cliq Offerings</h6>
            <ul className="list-unstyled">
              {["Watches for Men", "Sneakers for Men", "Casual Shoes for Women", "Wallets for Men", "Gold Rings"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-dark text-decoration-none d-block py-1">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Payment Options */}
        <div className="row text-center mt-4">
          <div className="col">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-dark fs-5"><FaFacebookF /></a>
              <a href="#" className="text-dark fs-5"><FaInstagram /></a>
              <a href="#" className="text-dark fs-5"><FaTwitter /></a>
            </div>
          </div>
          <div className="col">
            <h6 className="fw-bold">We Accept</h6>
            <div className="d-flex justify-content-center gap-3">
              <FaCcVisa className="fs-3 text-primary" />
              <FaCcMastercard className="fs-3 text-danger" />
              <FaCcPaypal className="fs-3 text-info" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row text-center mt-4 border-top pt-3">
          <div className="col">
            <p className="mb-0">© 2025 Tata Cliq Clone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
