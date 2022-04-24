import "bootstrap/dist/css/bootstrap.min.css";

// import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import FurnitureLists from "../App";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const homeSearch = "http://localhost:3000";
const homeSearchByFilterURL =
  "https://localhost:3000/getFurnituresByName&name=";
var filterName = "";
export var recoilTextSearchAtom = atom({
  key: "recoilTextSearchAtomKey",
  default: "",
});
function SearchBar() {
  const [searchText, setsearchText] = useState("Search");
  const [filterName1, setFilterName1] = useRecoilState(recoilTextSearchAtom);

  const triggerSearch = (searchTextValue) => {
    console.log("Search Text Value = " + searchTextValue.toLowerCase());
    filterName = searchText;
    setFilterName1(() => {
      console.log("FN : " + filterName1);
      filterName1 = filterName;
    });
  };
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder={searchText}
        className="me-2"
        aria-label={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      />
      <Button
        variant="outline-success"
        onClick={() => triggerSearch(searchText)}
      >
        Search
      </Button>
    </Form>
  );
}

function NavigationBarCommon() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href={homeSearch}>Afruno</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown
                title="Filter by Furnitures"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/#/Action2">All Items</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Tables</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Sofas</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Chair</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Bed</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <FurnitureLists filterName={filterName} /> */}
    </div>
  );
}
// module.exports = recoilTextState;
export default NavigationBarCommon;
