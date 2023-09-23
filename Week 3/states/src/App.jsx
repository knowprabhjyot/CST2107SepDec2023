
import { useState } from 'react';
import './App.css'

function App() {

// Use state is a function that  returns an array from which we destructuring [count, setcount]

  const [count, setCount] = useState(10);

  function incrementCounter() {
    // count++; // Incorrect way, this won't re-render the app component
    setCount(count + 1);
  }

  function decrementCounter() {
    // count--; // Incorrect way, this won't re-render the app component
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export default App
