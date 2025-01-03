import './App.css'
import AirplaneCards from './Components/AirplaneCards'
import CustomNavbar from './Components/CustomNavbar'
import FormComp from './Components/FormComp'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div id="bg">
      <BrowserRouter>
        <CustomNavbar />
        <Container>
          <Row>
            <AirplaneCards />
          </Row>
          <Row>
            <Col>
              <FormComp xs={12} md={6} />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
