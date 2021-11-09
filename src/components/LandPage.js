import React from 'react'
// import anime from 'animejs';
import { Col, Row } from 'react-bootstrap'
// import imageCode from '../img/code.jpg'
// import profile from '../img/profile.jpeg';
import github from '../img/github.svg';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
export default function LandPage() {
    //const comp = document.getElementsByClassName('animation');
    // const animationComponent = () => {
    //     anime({
    //         targets: comp,
    //         width : '100%',
    //         scale: {
    //             delay: 800,
    //             value: 1.5
    //         },
    //         duration: 1500
    //     })
    // };
    return (
        // style={{backgroundImage: `url(${imageCode})`}}
        <div className="text-center text-light vh-40 vh-xs-70 shadow bg-dark"> 
            <div className="overlay p-3 p-md-5 p-lg-5">
                {/* <button className="animation w-25" onClick={animationComponent}>Enter</button> */}
                <Row xs={1} md={2} lg={2} className="g-3 m-auto w-75 align-items-center">
                    <Col className="mt-1">
                        {/* <img src={profile} alt="profile" className="rounded-circle" width="170" height="170"/> */}
                        <h3>Hakan CAVDAR</h3> <br />
                        <h4 className="fw-bold">Développeur Junior FullStack</h4>
                    </Col>
                    <Col className="mt-1">
                        <h1 className="">Mon Portfolio</h1>
                        <h3>Réseaux Sociaux</h3>
                        <a href="https://github.com/hakan9719/"><img src={github} alt="github"/></a>
                        <a href="https://www.linkedin.com/in/hakan-cavdar/"><img src={linkedin} alt="linkedin"/></a>
                        <a href="https://www.instagram.com/hakan9719/"><img src={instagram} alt="insta"/></a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
