//import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import  AllCustomers  from './components/AllCustomers';
import UpdateCustomer from './components/UpdateCustomer';
import Homepage from './components/Homepage';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Login from "./components/Login";
import { useState } from 'react';



function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
         
          
          <Route path="/add" element={<AddCustomer />} />
          <Route path="/update/:id" element={ <UpdateCustomer />} />
          <Route path="/customers" element={<AllCustomers setSearch={setSearch} search={search}/>} />
          <Route path="/" element={<Homepage/>} />
          <Route path="login" element={<Login/>}/>
         

         
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
