import { Route, Routes } from "react-router-dom";
import BrandPage from "./Pages/BrandPage";
import Counter from "./components/02_Counter/Counter";
import Theme from "./Pages/09Theme";
import CartPage from "./Pages/CartPage";
import Cardprops from "./Pages/03_Cardprops";
import Fetchapi from "./components/FetchApi/fetchapi";
import Callingapifetchdata from "./Pages/Callingapifetchdata";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BrandPage />} />
      <Route path="counter" element={<Counter />} />
      <Route path="tailwindprops" element={<Cardprops />} />
      <Route path="themecontext" element={<Theme />} />
      <Route path="cartcontext" element={<CartPage />} />
      <Route path="fetchapi" element={<Fetchapi />} />
      <Route path="callingfetchapi" element={<Callingapifetchdata />} />
    </Routes>
  );
}

export default App;
