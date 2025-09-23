import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Peliculas from "../components/peliculas";
import NotFound from "../components/errorPage";
import PeliculaDetalle from "../components/peliculaDetalle";
import Blog from "../components/blog";
import Formulario from "../components/formulario";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peliculas" element={<Peliculas />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/formulario" element={<Formulario />} />
      {/* Ruta dinámica con parámetro id */}
      <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/sidebar" element={<Sidebar />} /> */}
    </Routes>
  );
}
