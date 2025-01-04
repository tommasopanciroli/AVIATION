import { useState, useEffect } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const API_KEY = 'iW11971AkHi4hkdV8Lp28OPObpWtyzNTQUjiBryuRtI4qyDWO4uvCvId'

const AirplaneCards = () => {
  const [planes, setPlanes] = useState([])

  const det = useNavigate()

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=plane', {
      headers: { Authorization: API_KEY },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata')
        }
      })
      .then((planes) => {
        console.log('Risultati della ricerca', planes)
        setPlanes(planes.photos)
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }, [])
  return (
    <Container>
      <Row>
        {planes.map((plane) => (
          <Col key={plane.id} xs={12} md={3}>
            <Card className="mt-2">
              <Card.Img
                variant="top"
                src={plane.src.original}
                style={{ height: '25rem' }}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{plane.alt}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                      det(`/details/${plane.id}`)
                    }}
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AirplaneCards
