import { useParams } from "react-router-dom";
import type { Usuario } from "./peliculas";
import { useLocation } from "react-router-dom";
function PeliculaDetalle() {
  const params = useParams();

  console.log(params);
  const location = useLocation();
  const pelicula = location.state as Usuario;
  return (
    <>
      <h2>{pelicula.nombre}</h2>
      <p>ID: {pelicula.id}</p>
      <img src={pelicula.image} alt={pelicula.nombre} width="300" />
    </>
  );
}

export default PeliculaDetalle;
