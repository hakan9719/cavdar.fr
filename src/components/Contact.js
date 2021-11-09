import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default function Contact() {
    const [status, setStatus] = useState("Envoyer");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("En cours...");
        //Get elements of the target
        const {name,email,message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        //Set the response of the mail
        let responses = await fetch('http://' + window.location.hostname + ':3002/send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details)
        });
        setStatus("Envoyer");
        let result = await responses.json();
        // Message d'alert
        alert(result.status);
    }
    return (
        <Container className="text-center my-5" id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <Row xs={1} md={3} lg={12} className="mb-3 w-75 mx-auto">
                    <Form.Group as={Col} controlId="name">
                        <Form.Control type="text" placeholder="Nom" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="message">
                        <Form.Control type="textarea" placeholder="Votre Message" />
                    </Form.Group>
                </Row>
                <button className="btn btn-primary" type="submit">{status}</button>
            </form>
        </Container>
    )
}
