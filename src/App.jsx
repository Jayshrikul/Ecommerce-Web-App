import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plist from "./pages/Plist";
import Cart from "./pages/CartPage";
import Wishlist from "./pages/WishlistPage";
import Profile from "./pages/ProfilePage";
import { CartProvider } from "./context/CartContext";
import SearchResults from "./pages/SearchResults";
import { products } from "./data/products";
import { WishlistProvider } from "./context/Wishlistcontext";
import { useState } from "react";
import CheckoutPage from "./pages/CheckoutPage";

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

            
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
            <Route path="/Checkout" element={<CheckoutPage />}/>
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
