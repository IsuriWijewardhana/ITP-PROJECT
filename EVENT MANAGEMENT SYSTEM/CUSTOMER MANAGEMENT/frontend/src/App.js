//import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import  AllCustomers  from './components/AllCustomers';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          
          <Route path="/add" element={[<Header />, <AddCustomer />]} />
          <Route path="/" element={[<Header/>,<AllCustomers />]} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
