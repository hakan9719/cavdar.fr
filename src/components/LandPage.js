import React from "react";
import { Col, Row } from "react-bootstrap";
// import profile from '../img/hakanbg.jpg';
import github from "../img/github.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";

export default function LandPage() {
  return (
    <div className="text-center text-light vh-xs-70 shadow bg-dark">
      <div className="overlay p-3 p-md-5 p-lg-5">
        <Row xs={1} md={2} lg={2} className="g-3 m-auto w-75 align-items-center">
          <Col className="mt-1">
            {/* <img src={profile} alt="profile" className="rounded-circle" width="170" height="170"/> */}
            <h3>Hakan CAVDAR</h3> <br />
            <h4 className="fw-bold">Développeur Junior FullStack</h4>
          </Col>
          <Col className="mt-1">
            <h1 className="">Mon Portfolio</h1>
            <h3>Réseaux Sociaux</h3>
            <a href="https://github.com/hakan9719/">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/hakan-cavdar/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/hakan9719/">
              <img src={instagram} alt="insta" />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
