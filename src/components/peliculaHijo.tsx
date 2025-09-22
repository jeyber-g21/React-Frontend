import { Link } from "react-router-dom";

import type { Usuario } from "./peliculas";

type UsuarioCardProps = {
  pelicula: Usuario; // el hijo espera recibir un objeto Usuario
  enviarPadre: (pelicula: Usuario) => void;
};

function PeliculaHijo({ pelicula, enviarPadre }: UsuarioCardProps) {
  return (
    <article key={pelicula.id} className="article-item" id="article-template">
      <div className="image-wrap">
        <img src={pelicula.image} alt={pelicula.nombre} />
      </div>

      <h2>{pelicula.nombre}</h2>
      <span className="date">Hace 5 minutos</span>
      <button onClick={() => enviarPadre(pelicula)}>Enviar a padre</button>
      <Link to={`/peliculas/${pelicula.id}`} state={pelicula}>
        <u>Leer mas</u>
      </Link>

      <div className="clearfix"></div>
    </article>
  );
}

export default PeliculaHijo;
