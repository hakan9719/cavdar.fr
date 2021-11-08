import React from 'react'
import {Card, Col, Container, Row } from 'react-bootstrap'
import prestige from '../img/prestige.png'
export default function Projects() {
    const data =[
        {
            "id": 1,
            "title": "Retoucherie Prestige",
            "web": "https://retoucherie-prestige.fr/",
            "img": prestige,
            "status": 1
        },
        {
            "id": 2,
            "title": "CarsWash94",
            "web": "https://retoucherie-prestige.fr/",
            "img": prestige,
            "status": 0
        },
        {
            "id": 3,
            "title": "KanBell",
            "web": "https://retoucherie-prestige.fr/",
            "img": prestige,
            "status": 0
        }
    ]
    return (
        <Container className="text-center py-5">
            <h1>Projets</h1>
            <Row xs={1} md={3} lg={12} className="g-3 m-auto w-75 justify-content-around">
                {data.map(data =>{
                    return data.status === 1 ?
                        <Col key={data.id}>
                            <Card className="border-0 pt-xs-3 h-100 rounded">
                                <Card.Body className="bg-secondary text-light fw-bold rounded-top text-center">
                                    <Card.Title>{data.title}</Card.Title>
                                </Card.Body>
                                <img className="rounded-bottom" variant="top" src={data.img} alt="prestige"/>
                                <div className="d-flex justify-content-center mt-1">
                                    <a className="btn btn-dark fs-5 fw-bold" href={data.web} target="_blank" rel="noreferrer">Voir</a>
                                </div>
                            </Card>
                        </Col>
                    : ''
                })}
            </Row>
        </Container>
    )
}
