//import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
   // <Router>
    <div>
      <Header/>
      <AddCustomer/>
    </div>
   // </Router>
  );
}

export default App;
