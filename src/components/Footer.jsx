import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5 pt-4">
      <div className="container">
        {/* Top Icons Section */}
        <div className="row text-center mb-4">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/50" alt="Authentic Brands" />
            <p className="mt-2">Authentic Brands</p>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/50" alt="Easy Returns" />
            <p className="mt-2">Easy Returns</p>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/50" alt="Easy Payments" />
            <p className="mt-2">Easy Payments</p>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="row text-start">
          <div className="col-md-3">
            <h6 className="fw-bold">Tata Marketplace</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Sell With Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Terms of Use</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Customer Service</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Shopping</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Offers & Promotions</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Payments</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Returns & Refunds</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">My Tata Cliq</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">My Account</a></li>
              <li><a href="#" className="text-dark text-decoration-none">My Orders</a></li>
              <li><a href="#" className="text-dark text-decoration-none">My Shopping Bag</a></li>
              <li><a href="#" className="text-dark text-decoration-none">My Wishlist</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Tata Cliq Offerings</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Watches for Men</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Sneakers for Men</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Casual Shoes for Women</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Wallets for Men</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Gold Rings</a></li>
            </ul>
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
