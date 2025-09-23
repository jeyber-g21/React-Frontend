import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [biografia, setBiografia] = useState("");
  const [genero, setGenero] = useState("hombre");

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // evita que se recargue la página

    console.log({
      nombre,
      apellidos,
      biografia,
      genero,
    });
  };
  return (
    <>
      <h1>Formulario page</h1>

      <form className="mid-form" onSubmit={manejarSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Biografia</label>
          <textarea
            name="bio"
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group radibuttons">
          <input
            type="radio"
            name="genero"
            value="hombre"
            checked={genero === "hombre"}
            onChange={(e) => setGenero(e.target.value)}
          />{" "}
          Hombre
          <input
            type="radio"
            name="genero"
            value="mujer"
            checked={genero === "mujer"}
            onChange={(e) => setGenero(e.target.value)}
          />{" "}
          Mujer
          <input
            type="radio"
            name="genero"
            value="otro"
            checked={genero === "otro"}
            onChange={(e) => setGenero(e.target.value)}
          />{" "}
          Otro
        </div>

        <div className="clearfix"></div>

        <input type="submit" value="Enviar" className="btn btn-success" />
      </form>
    </>
  );
}

export default Formulario;
