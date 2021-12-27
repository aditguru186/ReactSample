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
import { useEffect, useState } from "react";
// import NavigationBarCommon from "./navigationBar/NavigationBar";
// const getFurnitureUrl = "http://192.168.0.102:8080/getFurnitures";
const getFurnitureUrl = "http://localhost:8080/getFurnitures";

function FurnitureLists() {
  const [furnitureList, setFurnitureList] = useState([]);
  useEffect(() => {
    axios
      .get(getFurnitureUrl, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setFurnitureList(res.data));
  }, []);
  console.log(furnitureList);
  var cardStyle = {
    display: "inline-block",
    margin: 20,
    height: 400,
    width: 300,
    padding: 0,
    WebkitFilter: "drop-shadow(100px 100px 50px #555)",
    filter: "drop-shadow(5px 5px 50px #555)",
  };
  return (
    <div style={cardStyle}>
      {furnitureList === null ? (
        <p>Nothing TO show</p>
      ) : (
        furnitureList.map((furnitureData, iterator) => (
          <CardsSetUp
            furnitureData={furnitureData}
            key={furnitureData.productId}
          />
        ))
      )}
    </div>
  );
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
  var furnitureData = props.furnitureData;
  return (
    <div style={{ display: "inline-block" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={furnitureData.imageUrl} />
        <Card.Body>
          <Card.Title>{furnitureData.productName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price : Rs. {furnitureData.price}/-</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Buy Now</Card.Link>
          <Card.Link href="#">Add To Cart</Card.Link>
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
    furnitureDesc: "",
    price: 10000,
  };
  return (
    <div>
      <h1>Afruno Welcomes you!</h1>
      <NavigationBarCommon />
      {/* <CardsSetUp furnitureStuff={furnitureStuff} /> */}
      <FurnitureLists />
    </div>
  );
}

export default App;
