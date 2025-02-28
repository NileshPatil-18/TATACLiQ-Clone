import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  if (!product) return <h3 className="text-center mt-5">Product not found...</h3>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 mb-4">
          <img src={product.image} className="w-100 h-100 object-fit-contain p-3 border rounded" alt={product.title} />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p>{product.description}</p>
          <h5>Category: {product.category}</h5>
          <div className="mt-3">
            <button className="btn btn-primary me-2">Add to Cart</button>
            <button className="btn btn-danger">Wishlist</button>
          </div>
          <div className="mt-4">
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
