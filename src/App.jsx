import { Icon } from "@iconify/react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Conditional from "./components/Conditional";
import CountDown from "./components/CountDown";
import Counter from "./components/Counter";
import DaisyUI from "./components/DaisyUI";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import Tailwind from "./components/Tailwind";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      {/* <Header/> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      {/* <Hello/> */}
      {/* </div> */}
      {/* <Conditional/> */}
      {/* <Tailwind/> */}
      <div className="flex justify-center">
        {/* <Icon icon="mdi:cards-heart" fontSize={150} color="red" /> */}
        {/* <CountDown /> */}
      </div>
      <div className="flex">
        {/* <Card
          title="Card 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          imgUrl={"https://source.unsplash.com/random/900x700/?valentine"}
        />
        <Card
          title="Card 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          imgUrl={"https://source.unsplash.com/random/900x700/?valentine"}
        />
        <Card
          title="Card 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          imgUrl={"https://source.unsplash.com/random/900x700/?valentine"}
        />
        <Card
          title="Card 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          imgUrl={"https://source.unsplash.com/random/900x700/?valentine"}
        /> */}
      </div>
      <Counter />
    </div>
  );
}

export default App;
