import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBarCommon from "./navigationBar/NavigationBar";

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
    // display: "flex",
    // flexWrap: "nowrap",
    margin: 10,
    padding: 20,
    WebkitFilter: "drop-shadow(100px 100px 50px #555)",
    filter: "drop-shadow(5px 5px 50px #555)",
  };
  var furnitureDump = furnitureList.map((furnitureData) => {
    if (furnitureList === null) {
      return <p>Nothing To show</p>;
    }
    return (
      <CardsSetUp furnitureData={furnitureData} key={furnitureData.productId} />
    );
  });
  return <div style={cardStyle}>{furnitureDump}</div>;
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
  return (
    <div>
      <NavigationBarCommon />
      <FurnitureLists />
    </div>
  );
}

export default App;
