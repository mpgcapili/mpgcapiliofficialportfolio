import './App.css';
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/webawesome.js';
import '@awesome.me/webawesome/dist/components/button/button.js';

function App() {
let sales: number = 123_123_123;
console.log(sales);

  return (
    <>
      <h1>This is title</h1>
      <wa-button variant="brand" size="medium" pill>This is button</wa-button>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title /> 
      <h1>Vite + React try this</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
