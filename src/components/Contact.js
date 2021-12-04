import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import {Col, Container, Form, Row} from "react-bootstrap";

export default function Contact() {
  
  const [inputs, setInputs] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(setInputs);
    setInputs("");
    console.log(setInputs);
    sendEmail(event);
  }

  const sendEmail =(event)=>{
    init(process.env.REACT_APP_USER_ID);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <Container className="text-center my-5" id="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <Row xs={1} md={3} lg={12} className="mb-3 w-75 mx-auto">
          <Form.Group as={Col} controlId="name" className="mt-2">
            <Form.Control type="text" name="name" placeholder="Nom" onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="email" className="mt-2">
            <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="message" className="mt-2">
            <Form.Control type="textarea" name="message" placeholder="Votre Message" onChange={handleChange}/>
          </Form.Group>
        </Row>
        <button className="btn btn-primary" type="submit">
          Envoyer
        </button>
      </form>
    </Container>
  );
}
