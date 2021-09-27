import { Accordion, Button, Card, Col, Container, Image, ListGroup, Nav, Navbar, Row } from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <Navbar collapseOnSelect expand="lg" variant="light" style={{backgroundColor:"#FFFF"}}>
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Image src="https://via.placeholder.com/200" style={{width:"100vw",height:"25vh"}} fluid />
      <Container className="text-center py-3">
        <h1>Title</h1>
        <Row xs={1} md={3} lg={12} className="g-3 m-auto w-75">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="border-0 pt-xs-3 rounded">
                <Card.Body className="bg-light rounded text-center">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural.
                  </Card.Text>
                </Card.Body>
                <Card.Img className="rounded" variant="top" src="https://via.placeholder.com/100" />
                <div className="d-flex justify-content-center mt-n4">
                  <Button variant="primary">
                    <a className="text-decoration-none text-light" href="https://www.instagram.com/">Instagram</a>
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="text-center py-3">
        <h1>Title</h1>
        <img className="w-75 rounded" height="250px" src="https://via.placeholder.com/100" alt="" />
        <Row xs={1} md={3} lg={12} className="g-3 m-auto w-75">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="border-0 pt-xs-3 rounded">
                <Card.Body className="bg-light rounded text-center">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="text-center py-3">
        <h1>Title</h1>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
      <div className="py-3 bg-light w-100">
        <Row xs={1} md={3} lg={12} className="g-3 m-auto bg-light">
        {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <ListGroup variant="flush bg-light">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
          ))}
        </Row>
      </div>
      
      {/* <h1>TO DO</h1>
      <ul>
        <li>NavBar Home,About,Projet,Service,Contact stick the bar in the top </li>
        <li>LandPage, Welcome To my Portfolio</li>
        <li>About Young Dev</li>
        <li>Project Link GitHub cards list carouselq</li>
        <li>Sells</li>
        <li>Contact</li>
        <li>Footer</li>
      </ul> */}
    </div>
  );
}

export default App;
