import Dashboard from './pages/Dashboard'
import CustomNavbar from './components/CustomNavbar'
import { Container } from 'react-bootstrap'

import "./styles/custom.css"

function App() {

  return (
    <Container>
      <CustomNavbar />
      <Dashboard />
    </Container>
  )
}

export default App
