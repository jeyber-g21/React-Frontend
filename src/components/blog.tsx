import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Blog() {
  const { id } = useParams();

  type Article = {
    _id: string;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    __v: number;
  };
  const [articleDetail, setArticlesDetail] = useState<Article | null>(null);

  useEffect(() => {
    if (!id) return;

    const getArticle = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/articles/${id}`);
        if (!res.ok) {
          throw new Error("Error al traer el artículo");
        }
        const data = await res.json();
        console.log("Artículo recibido:", data);
        setArticlesDetail(data); // ✅ aquí el backend ya devuelve el objeto directamente
      } catch (error) {
        console.error(error);
      }
    };

    getArticle();
  }, [id]);

  if (!articleDetail) return <p>Cargando artículo...</p>;
  return (
    <>
      <div className="center">
        <section id="content">
          <article className="article-item article-detail">
            <div className="image-wrap">
              <img
                src={articleDetail.image}
                alt={articleDetail.title}
                width="300"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default Blog;
