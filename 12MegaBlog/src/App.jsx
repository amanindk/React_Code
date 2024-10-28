import { useEffect, useState } from "react";
import "./App.css";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components/Index";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //for React_create_app
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login());
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading());
  }, []);

  return !loading ? (
    <div className="flex flex-wrap min-h-screen content-between bg-gray-600">
      <div className="w-full block">
        <Header />
        <main>Todo:{/* outlet */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
