import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Aairline from "./airline";
import "./App.css";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/airline" exact element={<Aairline />} />
      </Routes>
    </Router>
  );
}

export default App;
