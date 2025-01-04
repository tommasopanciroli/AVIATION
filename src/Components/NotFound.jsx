import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="text-center">
      <h1>404, L'AEREO È SPARITO DAL RADAR </h1>
      <Button
        onClick={() => {
          navigate('/home')
        }}
      >
        FAI RIAPPARIRE IL SEGNALE
      </Button>
    </div>
  )
}

export default NotFound
