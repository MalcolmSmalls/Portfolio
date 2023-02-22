import { useState } from 'react'
import {
  About,
  Contact,
  Footer,
  Header,
  Navbar,
  Portfolio,
  Resume,
  Skillset,
} from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      <Skillset />
    </div>
  )
}

export default App
