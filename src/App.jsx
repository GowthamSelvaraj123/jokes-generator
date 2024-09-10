import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from './components/Jokes'

function App() {

  return (
    <>
       <h1>Joke Generator Using React and Joke API</h1>
       <Joke/>
    </>
  )
}

export default App
