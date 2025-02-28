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

function App() {
  return (
    <>
    <Router>
      <Navbar />
         <ToastContainer />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>

  );
}

export default App;