import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Header from './components/Header'
import Conditional from './components/Conditional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
      <Conditional/>
    </div>
  )
}

export default App
