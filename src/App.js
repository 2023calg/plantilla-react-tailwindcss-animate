import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Html/Navbar.jsx"
import NavbarItem from "./Componentes/Html/NavbarItem.jsx"

//Vistas

import Principal from "./Vistas/Principal.jsx"
import Ruta1 from "./Vistas/Ruta1.jsx"
import Ruta2 from "./Vistas/Ruta2.jsx"
import Ruta3 from "./Vistas/Ruta3.jsx"
import Ruta4 from "./Vistas/Ruta4.jsx"
import Ruta5 from "./Vistas/Ruta5.jsx"
import NoEncontrado from "./Vistas/NoEncontrado.jsx"

import Footer from "./Componentes/Html/Footer.jsx"

export default function App() {

  return (
      <BrowserRouter>

        <Navbar>
          <NavbarItem to="/">
            Principal
          </NavbarItem>
          <NavbarItem to="/ruta_1">
            Ruta 1
          </NavbarItem>
          <NavbarItem to="/ruta_2">
            Ruta 2
          </NavbarItem>
          <NavbarItem to="/ruta_3">
            Ruta 3
          </NavbarItem>
          <NavbarItem to="/ruta_4">
            Ruta 4
          </NavbarItem>
          <NavbarItem to="/ruta_5">
            Ruta 5
          </NavbarItem>
          {/*Ajusta las rutas del Navbar md*/}

        </Navbar>

        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/ruta_1" element={<Ruta1 />} />
          <Route path="/ruta_2" element={<Ruta2 />} />
          <Route path="/ruta_3" element={<Ruta3 />} />
          <Route path="/ruta_4" element={<Ruta4 />} />
          <Route path="/ruta_5" element={<Ruta5 />} />
          <Route path="/*" element={<NoEncontrado />} />
        </Routes>
        <Footer />
      </BrowserRouter >
  );
}

