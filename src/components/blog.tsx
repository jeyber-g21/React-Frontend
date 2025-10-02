import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

function Blog() {
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
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const getArticle = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/articles/${id}`);
        if (!res.ok) {
          if (res.status === 500) {
            throw new Error("Error interno del servidor. Intenta más tarde.");
          } else if (res.status === 404) {
            throw new Error("Artículo no encontrado.");
          } else {
            throw new Error("Ocurrió un error inesperado.");
          }
        }

        const data = await res.json();
        console.log("Artículo recibido:", data);
        setArticlesDetail(data); // ✅ aquí el backend ya devuelve el objeto directamente
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        } else if (typeof error === "string") {
          console.error(error);
          setError(error);
        } else {
          console.error("Error desconocido", error);
          setError("Ocurrió un error inesperado.");
        }
      }
    };

    getArticle();
  }, [id]);
  if (error) {
    return (
      <div className="center-Error">
        <h1>⚠️ 500 - Server Error</h1>
        <p>{error}</p>
        <div className="btnMov">
          <a href="/" className="btn">
            Volver al inicio
          </a>
        </div>

        <div className="clearfix"></div>
      </div>
    );
  }
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
      <div className="center-form">
        <article className="article-detail">
          <div className="image-wrap">
            <img
              src={articleDetail.image}
              alt={articleDetail.title}
              width="300"
            />
          </div>
          <br></br>

          <h2>
            <strong>{articleDetail.title}</strong>
          </h2>
          <span className="date">
            {formatDistanceToNow(new Date(articleDetail.createdAt), {
              addSuffix: true,
              locale: es,
            })}
            <hr></hr>
          </span>
          <br></br>
          <p>{articleDetail.content}</p>
          <div className="buttons">
            {/* <a className="btn btn-warning">Editar</a> */}
            <Link
              className="btnEdit"
              to={`/editar_articulo/${articleDetail._id}`}
            >
              Editar
            </Link>
            <a onClick={handleDelete} className="btnDelete">
              Borrar
            </a>
          </div>
        </article>

        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Blog;
