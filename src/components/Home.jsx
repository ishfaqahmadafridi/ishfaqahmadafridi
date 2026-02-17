import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Signin from "./Signin";
import Tracking from "./Tracking";
import Register from "./Register";
import Cart from "./Cart";
import Search from "./Search";
import Main from "./Main";
import Catwomen from "./Catwomen";
import ProductPage from "./ProductPage";
import Catman from "./Catman";
import CatBoysG from "./CatBoysG";
import CatFragrance from "./CatFragrance";
import CatMakeup from "./CatMakeup";
import CatSkincare from "./CatSkincare";
import LandingPage from "./LandingPage";

export default function Home() {
  const [page, setPage] = useState("landing"); /* Landing page first */
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [previousPage, setPreviousPage] = useState("home");

  // Enhanced addToCart function
  const addToCart = (product, size, quantity) => {
    setCartItems(prevItems => {
      // Check if item with same ID and size already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.size === size
      );

      if (existingItemIndex >= 0) {
        // Update quantity if exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          totalPrice: updatedItems[existingItemIndex].price * (updatedItems[existingItemIndex].quantity + quantity)
        };
        return updatedItems;
      } else {
        // Add new item
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            size,
            quantity,
            totalPrice: product.price * quantity
          }
        ];
      }
    });
    setPage("cart");
  };

  // Function to update cart item quantity
  const updateCartItemQuantity = (itemId, size, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.size === size
          ? {
              ...item,
              quantity: Math.max(1, newQuantity),
              totalPrice: item.price * Math.max(1, newQuantity)
            }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeFromCart = (itemId, size) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === itemId && item.size === size))
    );
  };

  const pages = {
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
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
      setSelectedProduct={setSelectedProduct} 
    />,
    women: <Catwomen 
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
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
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
      setSelectedProduct={setSelectedProduct} 
    />,
    boysgirlscat: <CatBoysG 
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
      setSelectedProduct={setSelectedProduct} 
    />,
    fragrances: <CatFragrance 
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
      setSelectedProduct={setSelectedProduct} 
    />,
    makeup: <CatMakeup 
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
      setSelectedProduct={setSelectedProduct} 
    />,
    skincare: <CatSkincare 
      setPage={(newPage) => {
        setPreviousPage(page);
        setPage(newPage);
      }} 
      setSelectedProduct={setSelectedProduct} 
    />,
    sale: <Main setPage={setPage} />, // Placeholder for sale page
  };

  return (
    <>
      <Header setPage={setPage} cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      {pages[page] || pages.home}
      <Footer />
    </>
  );
}