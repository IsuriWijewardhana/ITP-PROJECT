import MainScreen from "../../components/MainScreen";
import {Button,Col,Row, Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
//import { register } from "../../actions/userActions";
import { useState } from "react";
import axios from "axios";
import "./RegisterScreen.css";


const RegisterScreen = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [confirmpassword,setConfirmPassword] =useState("");
    const [telephone,setTelephone] =useState("");
    const [address,setAddress] =useState("");
    const [error,setError]=useState(false);
    const [loading,setLoading] = useState(false);

    //const submitHandler =async (e) =>{
        //e.preventDefault();

       // if(password !== confirmpassword){
            //console.log(email);
           // setMessage("Password Do not Match");

        //}else{
              //setMessage(null)  
              //try {
                 // const config = {
                      //header:{
                         // "Content-type":"application/json"
                     // },
                 // };

                 // setLoading(true);

               //   const {data} = await axios.post(
                     // "/api/users",
                     // {name,email,password},
                   //   config
                //  );
                  //setLoading(false);
                //  localStorage.setItem("userInfo",JSON.stringify(data));
             // } //catch (error) {
                  //setError(error.response.data.messagge);
             // }
        //}

        
   // };

  return (
    <MainScreen title="REGISTER">
         <div className="loginContainer">
        
      <Form >
      <Form.Group controlId="name">
          <Form.Label><strong><font color="green">Name</font></strong></Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <br/ >

        <Form.Group controlId="formBasicEmail">
          <Form.Label><strong><font color="green">Email</font></strong></Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label><strong><font color="green">Password</font></strong></Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br/>

        <Form.Group controlId="confirmPassword">
          <Form.Label><strong><font color="green">Confirm Password</font></strong></Form.Label>
          <Form.Control
            type="password"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="formBasicTelephone">
          <Form.Label><strong><font color="green">Telephone</font></strong></Form.Label>
          <Form.Control
            type="telephone"
            value={telephone}
            placeholder="enter phone number"
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Form.Group>
        <br/>

        <Form.Group controlId="formBasicAddress">
          <Form.Label><strong><font color="green">Address</font></strong></Form.Label>
          <Form.Control
            type="address"
            value={address}
            placeholder="enter your address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <br/>

        <Button variant="primary" type="register">
            Register
        </Button>

        </Form>

        <Row className="py-3">
            <Col>
            <font color="blue"> Already have an account?</font> <Link to="/login"><font color="red">Login</font></Link>
            </Col>
        </Row>
       
        
        </div>
    </MainScreen>
  );
};

export default RegisterScreen;