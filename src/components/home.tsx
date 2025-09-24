import { useEffect, useState } from "react";
import logoReact from "../assets/react.svg";

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
      <ul>
        {articles.map((u) => (
          <div id="articles">
            <article className="article-item">
              <div className="image-wrap">
                {u.image ? (
                  <img src={u.image} alt={u.title} />
                ) : (
                  <img src={logoReact} alt="Imagen por defecto" />
                )}
              </div>

              <h2>{u.title}</h2>

              <div className="clearfix"></div>
            </article>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Home;
