import { Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import wishlistpage from "./component/Wishlistpage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/wishlist" element={wishlistpage} />
    </Router>
  );
}

export default App;
