import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBarCommon from "./navigationBar/NavigationBar";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
var nvBarModule = import("./navigationBar/NavigationBar");
// var nvBarModule = require("./navigationBar/NavigationBar");

// const getFurnitureUrl = "http://192.168.0.102:8080/getFurnitures";
//http://localhost:8080/getFurnituresByName&name=Table
// const getFurnitureUrl = "http://192.168.0.185/getFurnituresByName&name=Table";
const getFurnitureUrl = "http://localhost:8080/getFurnitures";
const getFurnitureUrlByName = "http://localhost:8080/getFurnituresByName&name=";
const furnitureTypeList = ["table", "chair", "sofa"];

function FurnitureLists(props) {
  var searchUrl = "";
  // var filterFlag = false;
  // if (
  //   props !== null &&
  //   props.filterName !== null &&
  //   props.filterName !== undefined &&
  //   furnitureTypeList.includes(props.filterName.toLowerCase())
  // ) {
  //   console.log("Props Name : " + props.filterName);
  //   searchUrl = getFurnitureUrlByName + props.filterName;
  //   filterFlag = true;
  // } else searchUrl = getFurnitureUrl;
  let recoilTextSearchAtom = null;
  if (recoilTextSearchAtom === null) {
    let recoilObj = nvBarModule
      .then((module) => {
        return module["recoilTextSearchAtom"];
      })
      .then((mod) => {
        console.log('MOD with Key ["key"] value : ' + mod["key"]);
        console.log("returning atom object");
        return mod;
      });
    recoilTextSearchAtom = recoilObj;
  }
  console.log("############################");
  console.log("Key : Value for navBarModule : \n\n\n");
  console.log("############################");
  for (const [key, value] of Object.entries(nvBarModule)) {
    console.log("Key : " + key + " Value : " + value);
  }
  console.log("############################");
  console.log("Key : Value for navBarModule : \n\n\n");
  console.log("############################");
  for (const [key, value] of Object.entries(recoilTextSearchAtom)) {
    console.log("Key : " + key + " Value : " + value);
  }
  console.log("############################");
  // console.log("Recoil Text Search Atom  : " + recoilTextSearchAtom);
  const recoilTextSearchSelector = selector({
    key: "recoilTextSearchAtomKey",
    get: ({ get }) => {
      // console.log("Search Atom : " + get(recoilTextSearchAtom));
      if (recoilTextSearchAtom !== undefined && recoilTextSearchAtom !== null) {
        // console.log("OOOOLLAAAAlaleoooooo  " + recoilTextSearchAtom);
        // for (const [key, value] of Object.entries(recoilTextSearchAtom)) {
        //   console.log("Key : " + key + " Value : " + value);
        // }
        console.log("OOOOLLAAAAlaleoooooo  " + get(recoilTextSearchAtom));
        const filterText = get(recoilTextSearchAtom);
        return filterText;
      } else {
      }
    },
  });
  const filterName = useRecoilValue(recoilTextSearchSelector);
  if (filterName === "" || filterName === undefined)
    searchUrl = getFurnitureUrl;
  else searchUrl = getFurnitureUrlByName + filterName;
  console.log("Value received from recoil state is " + filterName);
  const [furnitureList, setFurnitureList] = useState([]);
  console.log("Search URL : " + searchUrl);
  useEffect(() => {
    axios
      .get(searchUrl, {
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
      <RecoilRoot>
        <NavigationBarCommon />
        <FurnitureLists />
      </RecoilRoot>
    </div>
  );
}

export default App;
