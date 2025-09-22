import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

function HeaderPage() {
  return (
    <>
      <header id="header">
        <div className="center">
          {/* LOGO  */}
          <div id="logo">
            <img src={reactLogo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>

          {/* <!-- MENU --> */}
          <nav id="menu">
            <ul>
              <li>
                <Link to="/">Inicio</Link>{" "}
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="formulario.html">Formulario</a>
              </li>
              <li>
                <Link to="/peliculas">Películas</Link> |{" "}
              </li>
              <li>
                <a href="#">Pagina 2</a>
              </li>
            </ul>
          </nav>

          {/* <!--LIMPIAR FLOTADOS--> */}
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
}

export default HeaderPage;
