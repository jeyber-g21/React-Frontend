import { useEffect, useState } from "react";
import logoReact from "../assets/react.svg";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";

function Home() {
  type Article = {
    _id: string;
    title: string;
    content: string;
    image: string;
    createdAt: string;
    __v: number;
  };
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/articles")
      .then((res) => res.json())
      .then((data) => {
        //console.log("Artículos recibidos:", data);
        setArticles(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      <h2>Lista de usuarios</h2>
      {articles.length > 0 ? (
        <div id="articles">
          {articles.map((u) => (
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
          ))}
        </div>
      ) : (
        <div className="subheader">
          <h2>No hay artículos disponibles</h2>
        </div>
      )}
    </>
  );
}

export default Home;
