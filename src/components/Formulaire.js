import React from 'react'
import emailjs, { init } from "emailjs-com";
import { useForm } from 'react-hook-form'
import { Col, Container, Row, Form } from 'react-bootstrap';


export default function Formulaire() {
    const {register, handleSubmit, formState: {isSubmitting}} = useForm()
    const onSubmit = async data => {
        init(process.env.REACT_APP_USER_ID);
        const formTarget = document.getElementById('email-form');
        
        emailjs
        .sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE_ID,formTarget,process.env.REACT_APP_USER_ID)
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    }


    return (
        <Container className="text-center my-5" id="contact">
            <h1>Contact</h1>
            <form id="email-form" onSubmit={handleSubmit(onSubmit)}>
                <Row xs={1} md={3} lg={12} className="mb-3 w-75 mx-auto">
                <Form.Group as={Col} controlId="name" className="mt-2">
                    <Form.Control type="text" name="name" placeholder="Nom" {...register('name')}/>
                </Form.Group>

                <Form.Group as={Col} controlId="email" className="mt-2">
                    <Form.Control type="email" name="email" placeholder="Email" {...register('email',{required: true})}/>
                </Form.Group>

                <Form.Group as={Col} controlId="message" className="mt-2">
                    <Form.Control type="textarea" name="message" placeholder="Votre Message" {...register('message',{required: true})}/>
                </Form.Group>
                </Row>
                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                Envoyer
                </button>
            </form>
        </Container>
    )
}
