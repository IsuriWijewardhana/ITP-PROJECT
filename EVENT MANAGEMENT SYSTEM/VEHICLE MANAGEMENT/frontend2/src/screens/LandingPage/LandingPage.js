import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  /* useEffect(() => {
     const userInfo = localStorage.getItem("userInfo");

     if (userInfo) {
       history.push("/mynotes");
     }
   }, [history]); */

  return (
    <div className="main">
      <Container>
        <Row>
          <dev className="intro-text">
            <div>
              <h1 className="title">Welcome to Vehicle Management</h1>
              <p className="subtitle">Vehicles for you...</p>
            </div>
            <div className="buttonContainer">
              <a href="/Login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </dev>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
