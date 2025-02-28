import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      
      <div className="row">
      {cart.length === 0 ? (
      <p>Your cart is empty.</p>
      ):( 
        cart.map(item => (
        <div key={item.id} className="col-md-3 mb-4">
          <div className="card h-100 w-100 align-item-center border-2 bg-white-smoke rounde p-2">
            <div className="card-img-top-container mt-2" style={{ height: "300px", overflow: "hidden" }}>
              <img src={item.image} 
                className="w-100 h-100 object-fit-contain p-2"
                alt={item.name} />
            </div> 
            <div className="card-body-small h-25 p-2">
                <div className='h-50'>
                <h5 className="card-title ps-3">{item.title}</h5>
                <p className="card-text ps-3">${item.price}</p>
                <p className='card-text ps-3 '>Quantity: {item.quantity}</p>
                </div >
              </div>
              <div className='p-1 mt-1 mb-2'>
                <button className="btn btn-danger  me-2" 
                  onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
                <button className="btn btn-primary  me-2" >
                  Buy Now 
                </button>
              </div>
                
          </div>
        </div>
        )
      ))}
      </div>
    </div>
    </>
  );
};

export default Cart;