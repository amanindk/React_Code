import React from "react";
import Wishlistpage from "./component/wishlistpage";
import { Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/wishlist" element={Wishlistpage} />
    </Router>
  );
}

export default App;
