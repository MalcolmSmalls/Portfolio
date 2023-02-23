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
      <Navbar />
      <Header />
      <About />
      <Skillset />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
