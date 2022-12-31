import React from 'react'
import {Form ,Button} from 'react-bootstrap'
import './form.css'
export default function FormRegisrer() {
 
  return (
    <div className="form">
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Bussines</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
