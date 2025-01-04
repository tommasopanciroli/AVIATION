import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <div className="text-center">
      <h1>SONO NELLA PAGINA DETTAGLI DELL'AEREO {params.id} </h1>
      <Button
        onClick={() => {
          navigate('/home')
        }}
      >
        Torna alla home
      </Button>
    </div>
  )
}

export default Details
