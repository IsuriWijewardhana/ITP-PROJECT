import { Button, Container, Row } from "react-bootstrap";
import "./Homepage.css";
import React, { useState } from "react";
import axios from "axios";

const Homepage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1>
              <font color="red">...WELCOME TO THE RUSTY DECO VEHICLES...</font>
            </h1>
            <a href="/Login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
