import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default function Contact() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        //Get elements of the target
        const {name,email,message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        //Set the response of the mail
        let responses = await fetch("http://localhost:3002/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details)
        });
        setStatus("Submit");
        let result = await responses.json();
        alert(result.status);
    }
    return (
        <Container className="text-center my-5" id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <Row xs={1} md={3} lg={12} className="mb-3 w-75 mx-auto">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" placeholder="Your Message" />
                    </Form.Group>
                </Row>
                <button className="btn btn-primary" type="submit">{status}</button>
            </form>
        </Container>
    )
}
