import { useState } from 'react';
import RightArrow from './assets/icons/right-arrow.svg?react';
import './App.scss';
import Overview from './pages/Overview/Overview';
import { Link } from 'react-router';

function App() {
  const [count, setCount] = useState(0);
  return (
    <main id="home-page">
      <h1>UP-Grade 2025</h1>
      <Overview />
      <div>
         <Link to="/overview">
          <button>temp overview link lol</button>
        </Link>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
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
