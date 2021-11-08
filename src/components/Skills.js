import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import reactLogo from "../img/react-native.svg";
import htmlLogo from "../img/html-5.svg";
import cssLogo from "../img/css3.svg";
import phpLogo from "../img/logo-php.svg";
import symfonyLogo from "../img/symfony.svg";
import jsLogo from "../img/javascript.svg";
import nodeLogo from "../img/nodejs.svg";
export default function Skills() {
    return (
        <Container className="text-center py-5">
            <h1>Compétences</h1>
            <Row xs={3} md={5} lg={7} className="g-3 m-auto w-75 justify-content-center">
                <Col><img src={htmlLogo} width="100%" alt="" /></Col>
                <Col><img src={cssLogo} width="100%" alt="" /></Col>
                <Col><img src={jsLogo} width="100%" alt="" /></Col>
                <Col><img src={phpLogo} width="100%" alt="" /></Col>
                <Col><img src={nodeLogo} width="100%" alt="" /></Col>
                <Col><img src={reactLogo} width="100%" alt="" /></Col>
                <Col><img src={symfonyLogo} width="100%" alt="" /></Col>
            </Row>
        </Container>
    )
}
