import { useState } from "react";
import Sidebar from "./sidebar";
import Swal from "sweetalert2";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // usamos FormData para enviar archivos + texto
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        body: formData, // no se pone headers Content-Type, fetch lo hace
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Artículo guardado!",
          text: "Tu artículo fue creado correctamente 🚀",
          confirmButtonColor: "#3085d6",
        });

        // limpiar
        setTitle("");
        setContent("");
        setImage(null);
        (e.target as HTMLFormElement).reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo guardar el artículo ❌",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error del servidor",
        text: "Intenta de nuevo más tarde",
      });
    }
  };
  return (
    <>
      <div className="center-form">
        <section id="content">
          <h2>Create Article</h2>
          <p>
            ou don't need to be an expert to design something amazing. Get
            inspired, customize, and bring your ideas to life with unique items
            that bear your personal stamp. 🚀 <strong>Start creating</strong>
          </p>
          <hr />
          <div className="card2">
            <form
              className="mid-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
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
                  placeholder=""
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
                <input type="submit" value="SAVE" className="btn" />
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

export default Create;
