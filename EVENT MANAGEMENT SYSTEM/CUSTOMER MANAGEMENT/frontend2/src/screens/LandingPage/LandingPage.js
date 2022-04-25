import { useEffect } from "react";
import {Button, Container,Row} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () =>{
    //useEffect(() =>{
       // const userInfo = localStorage.getItem("userInfo");

        //if(userInfo){
           // history.push("/mynotes");
       // }
        
   // },[history]);

    return(
        <div className="main">
            <Container>
                <Row>
                   <div className="intro-text">
                       <div>
                           <h1 className="title"><font color="green">Welcome To Customer Management</font></h1>
                           <p className="subtitle">One Safe Place for all your notes.</p>
                       </div>
                       <div className="buttonContainer">
                            <a href='/login'>
                            <Button size='lg' className="landingbutton">Login</Button>
                            </a>

                            <a href='/register'>
                            <Button size='lg' className="landingbutton" variant="outline-primary">Signup</Button>
                            </a>
                       </div>
                   </div>
                </Row>
            </Container>

        </div>
    );
};

export default LandingPage;