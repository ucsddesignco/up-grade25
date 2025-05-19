import { useState } from "react";
import RightArrow from './assets/icons/right-arrow.svg?react';
import Pegboard from "./components/ui/Pegboard/Pegboard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <main id="home-page">
      <h1>UP-Grade 2025</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Pegboard color="#FFF2DC" />
      <h2>Testing Font</h2>
      <select name="fonts">
        <option value="Role 1">Role 1</option>
        <option value="Role 2">Role 2</option>
        <option value="Role 3">Role 3</option>
      </select>
      <div className="icon-container">
        <h2>Testing Icon</h2>
        <RightArrow color="red" />
      </div>
    </main>
  );
}

export default App;
