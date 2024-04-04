import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        {/* <Exponent /> */}
        <em>Counter</em>
      </h2>

      <Counter
        count={count}
        increment={() => increment()}
        decrement={() => decrement()}
      />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo count={count} num={1} exponent={33} />
        <ExponentThree count={count} num={1} exponent={33} />
        <ExponentFour count={count} num={1} exponent={33} />
        <ExponentFive count={count} num={1} exponent={33} />
        <ExponentSix count={count} num={1} exponent={33} />
      </div>
    </div>
  );
}

export default App;
