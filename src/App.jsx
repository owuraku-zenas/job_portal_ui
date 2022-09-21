import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'

function App() {
    const [count, setCount] = useState(0)

    return (
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    )
  }

export default App
