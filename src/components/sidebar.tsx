import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const buscador = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // console.log(query);
      navigate(`/search/${query}`); // redirige al componente de resultados
    }
  };
  return (
    <aside id="sidebar">
      <div id="nav-blog" className="sidebar-item">
        <h3>Puedes hacer esto</h3>
        <a href="#" className="btn btn-success">
          Crear artículo
        </a>
      </div>

      <div id="search" className="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form onSubmit={buscador}>
          <input
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="submit" name="submit" value="Buscar" className="btn" />
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
