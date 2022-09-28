import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-one">
      <div className="container">
        <div className="mutiu">
          <div>MutiuBooking</div>
          <Link style={{ marginLeft: "auto" }} to="/mmutiu">
            <Button>Register</Button>
          </Link>

          <Button>Login</Button>
        </div>
        <div style={{ color: "wheat", marginTop: "20px" }}>
          A lifetime of discount? is Genuine.
        </div>
        <div style={{ color: "wheat" }}>
          Get rewarded for your travels-unlock intanst savings of 10% or more
          with a MutiuBooking account
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Button className="botton" style={{ fontSize: "13px" }}>
          Singin/Register
        </Button>
      </div>
    </div>
  );
};

export default Header;
