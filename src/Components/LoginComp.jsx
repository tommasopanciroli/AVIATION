import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const LoginComp = () => {
  const [emailAdd, setEmailAdd] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  useEffect(() => {
    console.log('SETTATI VALORI')
  }, [])

  useEffect(() => {
    console.log('CAMBIATA EMAIL')
  }, [emailAdd])

  useEffect(() => {
    console.log('CAMBIATA PASSWORD')
  }, [password])

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={emailAdd}
          onChange={(e) => {
            setEmailAdd(e.target.value)
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(e.target.checked)
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginComp
