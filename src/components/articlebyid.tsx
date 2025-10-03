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
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const getArticle = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/articles/${id}`);
        if (!res.ok) {
          if (res.status === 500) {
            throw new Error("Internal server error. Please try again later.");
          } else if (res.status === 404) {
            throw new Error("Artícle not found");
          } else {
            throw new Error("An unexpected error occurred.");
          }
        }

        const data = await res.json();

        setArticlesDetail(data); // ✅ aquí el backend ya devuelve el objeto directamente
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        } else if (typeof error === "string") {
          console.error(error);
          setError(error);
        } else {
          console.error("Unknown Error", error);
          setError("An unexpected error occurred.");
        }
      }
    };

    getArticle();
  }, [id]);

  // 👇 Renderizado condicional
  if (error) {
    return (
      <div className="center-Error">
        <h1>⚠️ 500 - Server Error</h1>
        <p>{error}</p>
        <div className="btnMov">
          <a href="/" className="btn">
            Go Home Page
          </a>
        </div>

        <div className="clearfix"></div>
      </div>
    );
  }

  if (!articleDetail) return <p>Waiting for artícle...</p>;
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          Swal.fire("Deleted", "The article has been deleted ✅", "success");
          navigate("/");
        } else {
          Swal.fire("Error", "The article could not be deleted. ❌", "error");
        }
      } catch (error) {
        Swal.fire("Error", "There was a problem with the server ❌", "error");
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
              Edit
            </Link>
            <a onClick={handleDelete} className="btnDelete">
              Delete
            </a>
          </div>
        </article>

        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default ArticleById;
