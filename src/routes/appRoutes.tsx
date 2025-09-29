import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Peliculas from "../components/peliculas";
import NotFound from "../components/errorPage";
import PeliculaDetalle from "../components/peliculaDetalle";
import Blog from "../components/blog";
import Formulario from "../components/formulario";
import Buscador from "../components/buscador";
import ArticleById from "../components/articlebyid";
import Create from "../components/createArticle";
import Edit from "../components/editArticle";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crear_articulo" element={<Create />} />
      <Route path="/editar_articulo/:id" element={<Edit />} />
      <Route path="/:id" element={<ArticleById />} />
      <Route path="/peliculas" element={<Peliculas />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/formulario" element={<Formulario />} />
      {/* Ruta dinámica con parámetro id */}
      <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
      <Route path="/search/:title" element={<Buscador />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/sidebar" element={<Sidebar />} /> */}
    </Routes>
  );
}
