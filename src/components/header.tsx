import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formulario"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Formulario
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/peliculas"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Peliculas
                </NavLink>
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
