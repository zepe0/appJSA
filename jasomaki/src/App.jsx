import { Toaster } from "react-hot-toast";
import AdminInscripciones from "../pages/AdminInscripciones";
import AdminTraje from "../pages/AdminTraje";

import HomeAdmin from "../pages/HomeAdmin";
import Inscripciones from "../pages/Inscripciones";
import Login from "../pages/Login";

import Perfil from "../pages/Perfil";
import Register from "../pages/Register";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeUser from "../pages/Prueva";
import Participantes from "../pages/Participantes";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUser />} />
          <Route path="/ins" element={<Inscripciones />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />

         
          <Route path="/Perfil" element={<Perfil />} />

          {/*  Rutas Admin */}

          <Route path="/Admin" element={<HomeAdmin />} />
          <Route path="/Admin/Participantes" element={<Participantes />} />

          <Route path="/Admin/ins" element={<AdminInscripciones />} />
          <Route path="/Admin/traje" element={<AdminTraje />} />
    

          {/*         Pruevas */}
          <Route path="/prueva" element={<Slider />} />
          <Route path="/a" element="helloww" />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
