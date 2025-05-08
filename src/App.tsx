import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import {
  decrease,
  // increment,
  incrementAsync,
  incrementByAmount,
  reset,
} from "./state/counter/counterSlice";
import type {AppDispatch, RootState} from "./state/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(incrementAsync(2))}>Increment</button>
        <button onClick={() => dispatch(decrease())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
