import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  incrementByAmount,
  decrementByAmount,
} from "./redux/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <Navbar count={count} />
      <div>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(multiply())}>*2</button>
      </div>
    </>
  );
}

export default App;
