import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LoginPage from './components/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './components/SignupPage';
import Footer from './components/Footer';
import Search from './components/Search';
import Categories from './components/Categories';


function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} /> 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/search' element={<Search/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/category/:categoryName' element={<Categories/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>

  );
}

export default App;