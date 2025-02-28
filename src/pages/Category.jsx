import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';

const Category = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const filtered = response.data.filter(product => product.category === category);
        setProducts(filtered);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 w-100 align-items-center border-2 bg-white-smoke">
                <div className="card-img-top-container" style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={product.image}
                    className="w-100 h-100 object-fit-contain p-4"
                    alt={product.title}
                  />
                </div>
                <div className="card-body-small h-50">
                  <h5 className="card-title ps-3">{product.title}</h5>
                  <p className="card-text ps-3">${product.price}</p>
                  <div className='p-2 mt-2'>
                    <button className="btn btn-primary me-2"
                      onClick={() => dispatch(addToCart(product))}>
                      Add to Cart
                    </button>
                    <button className='btn btn-danger'
                      onClick={() => dispatch(addToWishlist(product))}>
                      Wishlist
                    </button>
                  </div>  
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4>No products found in this category.</h4>
        )}
      </div>
    </div>
  );
};

export default Category;
