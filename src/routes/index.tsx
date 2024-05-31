import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
