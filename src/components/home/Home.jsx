import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHomeState } from "./hooks";
import { createPageRoutes } from "./utils";

export default function Home() {
  const {
    page,
    setPage,
    selectedProduct,
    setSelectedProduct,
    cartItems,
    previousPage,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    handlePageChange,
    cartItemCount,
  } = useHomeState();

  const pages = createPageRoutes({
    setPage,
    handlePageChange,
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    selectedProduct,
    setSelectedProduct,
    addToCart,
    previousPage,
  });

  return (
    <>
      <Header setPage={setPage} cartItemCount={cartItemCount} />
      {pages[page] || pages.home}
      <Footer />
    </>
  );
}