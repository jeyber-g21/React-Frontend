import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logoReact from "../assets/react.svg";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

function Buscador() {
  const { title } = useParams(); // obtiene el título desde la URL
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/search/${title}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Error al buscar:", err);
      }
    };

    if (title) fetchData();
  }, [title]);

  return (
    <div>
      <h2>Resultados de: {title}</h2>
      <div id="articles">
        {results.length > 0 ? (
          results.map((u) => (
            <article className="article-item" key={u._id}>
              <div className="image-wrap">
                {u.image ? (
                  <img src={u.image} alt={u.title} />
                ) : (
                  <img src={logoReact} alt="Imagen por defecto" />
                )}
              </div>

              <h2>{u.title}</h2>
              <span className="date">
                {formatDistanceToNow(new Date(u.createdAt), {
                  addSuffix: true,
                  locale: es,
                })}
              </span>
              <Link to={`/blog/${u._id}`}>{u.title}</Link>

              <div className="clearfix"></div>
            </article>
          ))
        ) : (
          <p>No existen articulos con ese nombre</p>
        )}
      </div>
    </div>
  );
}

export default Buscador;
