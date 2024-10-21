import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //for React_create_app
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <div>this is my app with appwrite</div>
    </>
  );
}

export default App;
