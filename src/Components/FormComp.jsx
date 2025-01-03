import { Form } from 'react-bootstrap'
import { Component } from 'react'

class FormComp extends Component {
  state = {
    formValue: {
      emailAddress: '',
      textArea: '',
    },
  }

  render() {
    return (
      <div className="">
        <h1>Hai una domanda? Fammela pure!</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={this.state.formValue.emailAddress}
              onChange={(e) => {
                this.setState({
                  formValue: {
                    ...this.state.formValue,
                    emailAddress: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.formValue.textArea}
              onChange={(e) => {
                this.setState({
                  formValue: {
                    ...this.state.formValue,
                    textArea: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default FormComp
