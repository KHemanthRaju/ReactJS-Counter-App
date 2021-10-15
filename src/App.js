import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [count,setCount] = useState(0);
  useEffect(() => console.log(count));
  return (
    <div>
    <h1>This is {count} </h1>
    <button onClick={()=>setCount(count+1)}>
      Click me
    </button>
    </div>
  );
}

export default App;
