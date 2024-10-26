import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:8080/idea")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("error fetching data:", error));
  }, []);

  return (
    <>
      <h1>Backend to Frontend communication</h1>
      <p>{message}</p>
    </>
  )
}

export default App
