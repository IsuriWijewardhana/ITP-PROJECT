import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyEvents from "./screens/MyEvents/MyEvents";

const App = () => (
  <BrowserRouter>
    <Header />

    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/myevents" component={() => <MyEvents />} />
    </main>

    <Footer />
  </BrowserRouter>
);
export default App;
