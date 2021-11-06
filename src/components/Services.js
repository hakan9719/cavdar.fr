import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import spa from '../img/spa.svg'
import mpa from '../img/mpa.svg'
import shop from '../img/shopify.svg'

export default function Services() {
    const data =[
        {
            "id": 1,
            "title": "SPA",
            "titleDescription": "(Single Page Application)",
            "description": "Site avec une Simple Page",
            "image":spa,
            "price": 100
        },
        {
            "id": 2,
            "title": "MPA",
            "titleDescription": "(Multi Page Application)",
            "description": "Site Multi Page",
            "image":mpa,
            "price": 200
        },
        {
            "id": 3,
            "title": "Shop",
            "titleDescription": "",
            "description": "Shopify Shop",
            "image": shop,
            "price": 150
        }
    ]
    return (
        <Container className="text-center py-4 py-lg-5 py-md-5" id="services">
            <h1>Mes Services</h1>
            <Row xs={1} md={3} lg={12} className="g-3 m-auto w-75">
                {data.map(plan =>
                    <Col className="vh-20" key={plan.id}>
                        <Card className="h-100 border-0 pt-xs-3 shadow">
                            <a href="#contact" className="text-decoration-none bg-services-cards h-100 rounded">
                                <Card.Body className="text-light text-center fw-bold h-100">
                                    <img src={plan.image} width="50%" height="60px" alt="" />
                                    <Card.Title>{plan.title}</Card.Title>
                                    <small>{plan.titleDescription}</small>
                                    <Card.Text className="fs-5">{plan.description}</Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    )
}
