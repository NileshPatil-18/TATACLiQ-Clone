import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (!isLoggedIn) {
      toast.error("Please login to add items to the cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      navigate("/login");
    } else {
      dispatch(addToCart(item));
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold">💖 Wishlist</h2>

      {/* Empty Wishlist Handling */}
      {wishlist.length === 0 ? (
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102659.png"
            alt="Empty Wishlist"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <p className="fs-5 text-muted">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {wishlist.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-3 p-3">
                <div
                  className="card-img-top-container mx-auto"
                  style={{ height: "250px", overflow: "hidden" }}
                >
                  <img
                    src={item.image}
                    className="w-100 h-100 object-fit-cover rounded"
                    alt={item.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="text-primary fw-semibold">${item.price}</p>
                  <p className="text-muted">Quantity: {item.quantity}</p>
                </div>
                <div className="text-center mb-2">
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    ❌ Remove
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(item)}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
