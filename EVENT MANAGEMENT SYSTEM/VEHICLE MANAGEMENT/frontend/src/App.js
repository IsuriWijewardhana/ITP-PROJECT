import "./App.css";
import AddVehicle from "./components/AddVehicle";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Header from "./components/Header";
import AllVehicles from "./components/AllVehicles";
import EditVehicle from "./components/EditVehicle";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Homepage from "./components/Homepage";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={[
              <Header />,
              <AllVehicles setSearch={setSearch} search={search} />,
            ]}
          />

          <Route path="/update/:id" element={[<Header />, <EditVehicle />]} />
          <Route
            path="/vehicles"
            element={[
              <Header />,
              <AllVehicles setSearch={setSearch} search={search} />,
            ]}
          />

          <Route path="/add" element={[<Header />, <AddVehicle />]} />

          <Route path="/" element={[<Header />, <Homepage />]} />
          <Route path="/login" element={[<Header />, <LoginScreen />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
