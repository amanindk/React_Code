import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
// import Github, { githubInfoLoader } from "./components/Github/Github";
import Github from "./components/Github/Github";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            // loader={githubInfoLoader}
            path="/github"
            element={<Github />}
          />
          <Route path="/user/:userid" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
