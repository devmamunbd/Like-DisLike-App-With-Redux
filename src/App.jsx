import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeDisLike from './components/LikeDisLike'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <LikeDisLike/>

    </>
  )
}

export default App
