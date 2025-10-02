import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logoReact from "../assets/react.svg";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

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
      <div className="center-form">
        <section id="content">
          <h2>Resultados de: {title}</h2>
          <p>
            Estos son los artículos que encontramos para ti. Explora, descubre
            nuevas ideas y encuentra justo lo que necesitas para inspirarte o
            comenzar a crear tu propio proyecto.
            <hr></hr>
          </p>
          <div id="articles" className="articleSection">
            {results.length > 0 ? (
              results.map((u) => (
                <article className="article-item card" key={u._id}>
                  <div className="image-wrap">
                    {u.image ? (
                      <img src={u.image} alt={u.title} />
                    ) : (
                      <img src={logoReact} alt="Imagen por defecto" />
                    )}
                  </div>

                  <h2>
                    <Link to={`/blog/${u._id}`}>{u.title}</Link>
                  </h2>
                  <p>{u.content}</p>
                  <span className="date">
                    {formatDistanceToNow(new Date(u.createdAt), {
                      addSuffix: true,
                      locale: es,
                    })}
                  </span>

                  <div className="clearfix"></div>
                </article>
              ))
            ) : (
              <p>No existen articulos con ese nombre</p>
            )}
          </div>
        </section>
        <Sidebar />
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Buscador;
