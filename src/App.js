import './App.css'
import AirplaneCards from './Components/AirplaneCards'
import CustomNavbar from './Components/CustomNavbar'
import MyPresentation from './Components/MyPresentation'
import FormComp from './Components/FormComp'
import LoginComp from './Components/LoginComp'
import NotFound from './Components/NotFound'
import Details from './Components/Details'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div id="bg">
      <BrowserRouter>
        <CustomNavbar />
        <Container>
          <Routes>
            <Route path="/home" element={<AirplaneCards />} />
            <Route path="/pacchetti" element={<MyPresentation />} />
            <Route path="/login" element={<LoginComp />} />
            <Route path="/contacts" element={<FormComp />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
