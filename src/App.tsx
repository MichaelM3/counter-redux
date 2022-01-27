import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RootStore } from './Store'
import { IncrementCount } from './Actions/CountActions'
import { useDispatch, useSelector } from 'react-redux'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const countState = useSelector((state: RootStore) => state.count)
  const handleClick = () => {
    dispatch(IncrementCount(countState.count+1))
  }

  console.log(countState);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {countState.count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
