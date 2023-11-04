import "./App1.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Navbar1" about="About Text" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze  " />
      </div>
    </>
  );
}

export default App;
