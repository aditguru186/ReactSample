import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
// import NavigationBarCommon from "./navigationBar/NavigationBar";
const getFurnitureUrl = "localhost:8080/getFurnitures";

class FurnitureLists extends React.Component{
  state = {
    furnitureLists : []
  }
  componentDidMount(){
    axios.get(getFurnitureUrl).then(res =>{
      const furnitureData = res.data
      this.setState({furnitureData})
    })
  }
  render(){
    console.log(this.state.furnitureLists)
    return(

      <div>this.state.furnitureLists</div>
    )
  }
}
function NavigationBarCommon() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Afruno</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
function CardsSetUp(props) {
  var furnitureStuff = props.furnitureStuff;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={furnitureStuff.imageName} />
        <Card.Body>
          <Card.Title>Furniture Name</Card.Title>
          <Card.Text>{furnitureStuff.furnitureDesc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Furniture Item Name</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
function App() {
  var furnitureStuff = {
    id: 1001,
    furnitureName: "Sofa",
    imageName:
      "https://www.ikea.com/in/en/images/products/strandmon-wing-chair-skiftebo-yellow__0325450_pe517970_s5.jpg?f=xl",
    furnitureDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  };
  return (
    <div>
      <h1>Afruno Welcomes you!</h1>
      <NavigationBarCommon />
      <CardsSetUp furnitureStuff={furnitureStuff} />
    </div>
  );
}

export default App;