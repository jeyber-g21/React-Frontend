import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <h3>You can do this</h3>
        {/* <a href="#" className="btn btn-success">
          Crear artículo
        </a> */}
        <Link className="btn" to={`/crear_articulo`}>
          Create Article
        </Link>
      </div>

      <div id="search" className="sidebar-item">
        <h3>Search bar</h3>
        <p>Find the article you are looking for</p>
        <form onSubmit={buscador}>
          <input
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input type="submit" name="submit" value="SEARCH" className="btn" />
        </form>
      </div>
    </aside>
  );
}

export default Sidebar;
