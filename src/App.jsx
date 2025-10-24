import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plist from "./pages/Plist";
import Cart from "./pages/Cartpage";
import Wishlist from "./pages/WishlistPage";
import Profile from "./pages/Profilepage";
import { CartProvider } from "./context/Cartcontext";
import Searchresults from "./pages/Searchresults";
import { products } from "./data/products";
import { WishlistProvider } from "./context/Wishlistcontext";
import { useState } from "react";
import CheckoutPage from "./pages/Checkoutpage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (   
    <WishlistProvider>
      <CartProvider>
        <Router>
          {/* ✅ Pass searchQuery + setSearchQuery to Navbar */}
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Plist products={products} />} />
            <Route path="/category/all" element={<Plist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Searchresults searchQuery={searchQuery} />} />
            <Route path="/Checkout" element={<CheckoutPage />}/>
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
