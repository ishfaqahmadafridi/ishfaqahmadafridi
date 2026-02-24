/**
 * Page Routes Configuration
 * Defines all page routes and their component mappings
 */
import React from 'react';
import Signin from '../../sigin/Signin';
import Tracking from '../../tracking/Tracking';
import Register from '../../register/Register';
import Cart from '../../cart/Cart';
import Search from '../../search/Search';
import Main from '../../main/Main';
import Catwomen from '../../catwoman/Catwomen';
import ProductPage from '../../productpage/ProductPage';
import Catman from '../../catman/Catman';
import CatBoysG from '../../catboyG/CatBoysG';
import CatFragrance from '../../catfrageance/CatFragrance';
import CatMakeup from '../../catmakeup/CatMakeup';
import CatSkincare from '../../catskincare/CatSkincare';
import LandingPage from '../../landingPage/LandingPage';

export const createPageRoutes = ({
  setPage,
  handlePageChange,
  cartItems,
  updateCartItemQuantity,
  removeFromCart,
  selectedProduct,
  setSelectedProduct,
  addToCart,
  previousPage,
}) => ({
  landing: <LandingPage setPage={setPage} />,
  home: <Main setPage={setPage} />,
  signin: <Signin setPage={setPage} />,
  register: <Register setPage={setPage} />,
  tracking: <Tracking />,
  cart: (
    <Cart 
      cartItems={cartItems}
      updateQuantity={updateCartItemQuantity}
      removeItem={removeFromCart}
      setPage={setPage}
    />
  ),
  search: <Search setPage={setPage} />,
  man: <Catman 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  women: <Catwomen 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  product: (
    <ProductPage
      product={selectedProduct}
      setPage={setPage}
      addToCart={addToCart}
      previousPage={previousPage}
    />
  ),
  boysG: <CatBoysG 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  boysgirlscat: <CatBoysG 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  fragrances: <CatFragrance 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  makeup: <CatMakeup 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  skincare: <CatSkincare 
    setPage={handlePageChange} 
    setSelectedProduct={setSelectedProduct} 
  />,
  sale: <Main setPage={setPage} />,
});
