//import e from "express";
import {useEffect, useState} from "react";
import{Button,Col,Form,Row} from "react-bootstrap";
//import { Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import axios from "axios";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const LoginScreen = ({history}) =>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    const [error,setError] = useState(false); 
    const [loading,setLoading] = useState(false);
    

    const submitHandler = async(e) =>{
        e.preventDefault()
        //console.log(email,password);

        try{
           const config = {
               headers:{
                   "Content-type":"application/json"
               }
           } 

           setLoading(true)
            const{data}=await axios.post("/api/users/login",
            {
                email,
                password,
            },
                config
            );

            console.log(data);
            localStorage.setItem("userInfo",JSON.stringify(data));
           setLoading(false)

        } catch(error){
            setError(error.response.data.message);
            setLoading(false)
        }
 
    };

    return(
        <MainScreen title="LOGIN">
            <div className="loginContainer">
               {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} 
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><strong><font color="green">User Name</font></strong></Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter user name"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>
                    <br/>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><strong><font color="green">Password</font></strong></Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="*******"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </Form.Group>
                    <br/>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
                <Row className="py-3">
                    <Col>
                    <font color="blue"> Don't have an account?</font> <Link to="/register"><font color="red">Register here</font></Link>
                    </Col>
                </Row>

            </div>
        </MainScreen>
        
        
    );
};

export default LoginScreen;
