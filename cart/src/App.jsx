import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Wishlistpage from "./component/Wishlistpage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/wishlist" element={<Wishlistpage />} />
      </Routes>
    </>
  );
}

export default App;
