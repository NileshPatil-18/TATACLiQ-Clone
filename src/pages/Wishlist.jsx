import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className='row'>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? <p>Your wishlist is empty.</p> : wishlist.map(item => (
        <div key={item.id} className="col-md-3 mb-4">
                  <div className="card h-100 w-100 align-item-center border-2 bg-white-smoke">
                    <div className="card-img-top-container" style={{ height: "200px", overflow: "hidden" }}>
                      <img src={item.image} 
                        className="w-100 h-100 object-fit-contain p-4"
                        alt={item.name}
                        />
                    </div>                    
                    <div className="card-body-small h-50">
                        <div className='h-50'>
                        <h5 className="card-title ps-3">{item.title}</h5>
                        <p className="card-text ps-3">${item.price}</p>
                        <p className='card-text ps-3 '>Quantity: {item.quantity}</p>
                        </div >
                      </div>
                      <div className='p-2 mt-2'>
                        <button className="btn btn-danger  me-2" 
                          onClick={() => dispatch(removeFromWishlist(item.id))}>
                          Remove
                        </button>
                        <button className="btn btn-primary  me-2" onClick={()=>{
                            dispatch(addToCart(item.id));
                          }}>
                          Add to Cart
                        </button>
                   </div>
                        
                </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default Wishlist;