import "./App.css";
import AddVehicle from "./components/AddVehicle";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Header from "./components/Header";
import AllVehicles from "./components/AllVehicles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={[<Header />, <AddVehicle />]} />
          <Route path="/" element={[<Header />, <AllVehicles />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
