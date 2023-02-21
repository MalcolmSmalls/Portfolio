import { useState } from 'react'
import { About, Contact, Footer, Header, Navbar, Portfolio, Resume} from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
