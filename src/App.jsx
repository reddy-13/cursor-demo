import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CustomCursor from './components/CustomCursor';
import logo from './assets/wizaart-img.56787174 .gif'
import './App.css'
import CustomCursor2 from './components/CustomCursor2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CustomCursor2 />
        {/* new one */}
        {/* <div className='flair' style={{ cursor: `url(${logo}), auto` }}></div> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
