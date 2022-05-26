import {Button, Container,Row} from "react-bootstrap";
import "./Homepage.css";
import React,{useState} from "react"
import axios from "axios";
//import img1 from "../images/home.jpg";
//import background from "..images/home.jpg";



const Homepage = () =>{
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                   
                        <h1><font color="red">..WELCOME CUSTOMER TO THE RUSTY DECO..</font></h1>
                       

                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size="lg" className="homebutton">Login</Button>
                            </a>
                          
                        </div>

                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default Homepage;