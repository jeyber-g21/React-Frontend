import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ArticleById() {
  const { id } = useParams();
  const navigate = useNavigate();

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
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás recuperar este artículo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          Swal.fire("Eliminado", "El artículo ha sido eliminado ✅", "success");
          navigate("/");
        } else {
          Swal.fire("Error", "No se pudo eliminar el artículo ❌", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Hubo un problema con el servidor ❌", "error");
      }
    }
  };
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
            <h1 className="subheader">{articleDetail.title}</h1>
            <span className="date">
              {formatDistanceToNow(new Date(articleDetail.createdAt), {
                addSuffix: true,
                locale: es,
              })}
            </span>
            <p>{articleDetail.content}</p>
            <div className="buttons">
              {/* <a className="btn btn-warning">Editar</a> */}
              <Link
                className="btn btn-succes"
                to={`/editar_articulo/${articleDetail._id}`}
              >
                Editar
              </Link>
              <a onClick={handleDelete} className="btn btn-danger">
                Borrar
              </a>
            </div>
            <div className="clearfix"></div>
          </article>
        </section>
      </div>
    </>
  );
}

export default ArticleById;
