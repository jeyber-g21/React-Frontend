import Notas from "../assets/notas.svg";
import { NavLink } from "react-router-dom";

function HeaderPage() {
  return (
    <>
      <header id="header">
        <div className="center">
          {/* LOGO  */}
          <div id="logo">
            <img src={Notas} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Articles</strong>.PRO
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
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Last-articles"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Last Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formulario"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Form Page
                </NavLink>
              </li>
              <li>
                {/* <NavLink
                  to="/peliculas"
                  className={({ isActive }) =>
                    isActive ? "link-activo" : "link"
                  }
                >
                  Reading
                </NavLink> */}
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
