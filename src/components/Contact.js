// import React from "react";
// import { Col, Container, Form, Row } from "react-bootstrap";
// require('dotenv').config();
import emailjs from 'emailjs-com'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default function Contact() {
  
  const sendEmail = e => {
    e.preventDefault()
    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
      )
    }

    return (
      <Container className="text-center my-5" id="contact">
            <h1>Contact</h1>
            <form onSubmit={sendEmail}>
                <Row xs={1} md={3} lg={12} className="mb-3 w-75 mx-auto">
                    <Form.Group as={Col} controlId="name">
                        <Form.Control type="text" name="name" placeholder="Nom" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Control type="email" name="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="message">
                        <Form.Control type="textarea" name="message" placeholder="Votre Message" />
                    </Form.Group>
                </Row>
                <button className="btn btn-primary" type="submit">Envoyer</button>
            </form>
        </Container>
    );
}
