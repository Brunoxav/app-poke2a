import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import pokemon from './assets/pokeapi_256.png'
import './App.css'
import Listagem from './listagem/lista_pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokemon} className="logo" alt="Logo pokémon" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pokémon + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Listagem/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Pokémon and React logos to learn more
      </p>
    </>
  )
}

export default App
