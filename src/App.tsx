import { useState } from 'react'
import Horoscope from './components/Horoscope';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Horoscope></Horoscope>    
  )

}

export default App
