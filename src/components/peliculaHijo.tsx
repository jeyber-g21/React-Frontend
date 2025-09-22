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
      <a href="#">Leer más</a>

      <div className="clearfix"></div>
    </article>
  );
}

export default PeliculaHijo;
