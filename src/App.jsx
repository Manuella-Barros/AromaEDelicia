import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./componentes/navbar/NavBar";
import Home from "./pages/home/Home";
import Footer from "./componentes/footer/Footer";
import Cardapio from "./pages/cardapio/Cardapio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cardapio/*"} element={<Cardapio />}>
          <Route path="cafes" element={<Cardapio />} />
          <Route path="donuts" element={<Cardapio />} />
          <Route path="cupcakes" element={<Cardapio />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
