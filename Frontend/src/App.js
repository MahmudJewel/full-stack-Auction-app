import "./App.css";

// packages
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// components
import ResponsiveNavbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Logout } from "./components/Logout";
import { ProductWithDetails } from "./components/ProductWithDetails";

// css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveNavbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:slug" element={<ProductWithDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
