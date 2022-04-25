import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={[<LandingPage />]} />
          <Route path="/login" element={[<LoginScreen />]} />
          <Route path="/register" element={[<RegisterScreen />]} />
          <Route path="/mynotes" element={[<MyNotes />]} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
