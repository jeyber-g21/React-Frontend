import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Edit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log("DATA es", data);
        setTitle(data.title);
        setContent(data.content);
      })
      .catch((err) => console.error("Error cargando artículo:", err));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }
    // 🔎 DEBUG: mostrar qué se está enviando
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      console.log("Respuesta backend:", data); // 🔎 DEBUG

      if (res.ok) {
        Swal.fire("✅ Éxito", "Artículo actualizado correctamente", "success");
        navigate("/"); // Redirigir a la página principal
      } else {
        Swal.fire("❌ Error", "No se pudo actualizar el artículo", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("❌ Error", "Error en la petición", "error");
    }
  };
  return (
    <>
      <div className="center-form">
        <section id="content">
          <h2>Edit Article</h2>
          <p>
            Every detail counts. Editing an article isn't just about correcting
            it, it's giving it a new opportunity to shine. Adjust, improve, and
            transform your idea until it becomes something that truly reflects
            what you want to share.
          </p>
          <hr />
          <div className="card2">
            <form onSubmit={handleSubmit} className="mid-form">
              <div className="form-group">
                <label htmlFor="nombre">Title</label>
                <input
                  type="text"
                  id="nombre"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">content</label>
                <textarea
                  placeholder="Contenido del artículo..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={5} // 🔹 controlas el alto del textarea
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>

              <div className="clearfix"></div>
              <br></br>
              <div className="btnMov">
                <input type="submit" value="SAVE" className="btn btn-success" />
              </div>
            </form>
          </div>
        </section>
        <Sidebar />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Edit;
