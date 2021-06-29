import React from "react";
import {
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
export default function Navigationbar() {
  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        height: "9vh",
        justifyContent: "center",
        backgroundColor: "#333333",
      }}
    >
      <div style={{ float: "right", marginTop: "3vh", marginRight: "3vw" }}>
        Logout
      </div>
    </nav>
  );
}
