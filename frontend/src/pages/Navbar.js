import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  const [profile, setprofile] = useState("");

  useEffect(() => {
    setprofile(localStorage.getItem("name"));
    console.log(profile);
    if (localStorage.getItem("name") == undefined) router.push("/");
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#000030 " }}
      variant="dark"
    >
      <Container>
        <Chip
          style={{
            marginRight: "10px",
            fontSize: "20px",
            backgroundColor: "#B6D1DE",
          }}
          label="</> FUSION"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Main">Home</Nav.Link>
            <Nav.Link href="/Leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="#pricing">Cources</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Profile">{profile}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
