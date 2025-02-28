import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import Banner from "../components/Banner";
import { addToWishlist } from "../redux/slices/wishlistSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts()); // Fetch only once
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      toast.warning('Please login to add items to the cart!', {
        position: 'top-right',
        autoClose: 2000,
      });
      navigate('/login');
    } else {
      dispatch(addToCart(product));
      toast.success('Product added to the cart!', {
        position: 'top-right',
        autoClose: 2000,
      });

    }
  };

  const handleToAddWishList=(product)=>{
      dispatch(addToWishlist(product));
      toast.success('Product added wishList!', {
        position: 'top-right',
        autoClose: 2000,
      });
  }
  

  if (status === "loading") return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-4">
      <div className="p-2">
      <Banner/>
      </div>
      <p class="text-center fw-bold fs-4">Featured Products</p>

      <div className="row">
        {items.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100 border-2 p-2">
              <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <div className="card-img-top-container" style={{ height: "200px", overflow: "hidden" }}>
                  <img src={product.image} className="w-100 h-100 object-fit-contain p-3" alt={product.title} />
                </div>
                <div className="card-body text-center p-2">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </Link>
              <div className="text-center my-2">
                <button className="btn btn-primary me-2"
                onClick={()=>handleAddToCart(product)  
                }
                >Add to Cart</button>
                <button className="btn btn-danger"
                onClick={()=>handleToAddWishList(product)}
                >Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
