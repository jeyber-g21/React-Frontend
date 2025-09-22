import { useState } from "react";
import PeliculaHijo from "./peliculaHijo";

export interface Usuario {
  id: number;
  nombre: string;
  image: string;
}

function ListaPeliculas() {
  const [mensajeHijo, setMensajeHijo] = useState<Usuario | null>(null);
  const [peliculas, setPeliculas] = useState<Usuario[]>([
    {
      id: 1,
      nombre: "john wick",
      image:
        "https://media-assets.wired.it/photos/66b1d66259516ecab982bc53/16:9/w_2112,h_1188,c_limit/Screenshot%202024-08-06%20alle%2009.52.49.png",
    },
    {
      id: 2,
      nombre: "Era de hielo",
      image: "https://tomatazos.buscafs.com/2022/01/hielo-aventuras-buck.jpg",
    },
    {
      id: 3,
      nombre: "vengadores",
      image: "https://i.blogs.es/fe7e7d/vengadores-era-ultron/650_1200.jpg",
    },
  ]);

  const cambiarNombre = () => {
    const nuevaPelicula = [...peliculas];
    nuevaPelicula[0] = { ...nuevaPelicula[0], nombre: "Batman" };
    setPeliculas(nuevaPelicula);
  };

  const recibirMensaje = (dato: Usuario) => {
    setMensajeHijo(dato);
    // console.log(mensajeHijo);
  };

  return (
    <div>
      <h3>Pelicula seleccionada:</h3>
      {mensajeHijo ? (
        <p>
          {mensajeHijo.id} - {mensajeHijo.nombre}
        </p>
      ) : (
        <p>pelicula seleccionada</p>
      )}
      <h2 className="subheader">Lista de peliculas</h2>
      <div id="articles">
        <ul>
          {peliculas.map((pelicula) => (
            <PeliculaHijo
              key={pelicula.id}
              pelicula={pelicula}
              enviarPadre={recibirMensaje}
            />
          ))}
        </ul>
        <button onClick={cambiarNombre}>Cambiar Nombre</button>
      </div>
    </div>
  );
}

export default ListaPeliculas;
