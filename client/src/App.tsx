import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import CartMenu from './components/Global Components/CartMenu';
import Footer from './components/Global Components/Footer';
import Navbar from './components/Global Components/Navbar';
import ErrorPage from './pages/404 Page/ErrorPage';
import Checkout from './pages/Checkout Page/Checkout';
import ConfirmationPage from './pages/Checkout Page/ConfirmationPage';
import Contact from './pages/Contact Page/Contact';
import Home from './pages/Home Page/Home';
import ProductDetailPage from './pages/Product Detail Page/ProductDetailsPage';
import ProductListingPage from './pages/Product Listing Page/ProductListingPage';

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="h-16">
          <Navbar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/checkout/success' element={<ConfirmationPage />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/shop' element={<ProductListingPage />}></Route>
          <Route path='/products/:id' element={<ProductDetailPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
          <Route index path='/' element={<Home />}></Route>
        </Routes>
        <CartMenu />
        <div className="">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
