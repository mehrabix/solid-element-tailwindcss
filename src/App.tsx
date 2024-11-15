import { Component } from "solid-js";
import "./components/Button";

const App: Component = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div class="p-4">
      <cn-button
        someProp="Click me"
        class="bg-green-500 hover:bg-green-600"
        onClick={handleClick}
      ></cn-button>
    </div>
  );
};

export default App;
