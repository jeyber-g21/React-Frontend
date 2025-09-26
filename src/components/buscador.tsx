import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      {results.length > 0 ? (
        results.map((a) => (
          <div key={a._id}>
            <h3>{a.title}</h3>
            <p>{a.content}</p>
          </div>
        ))
      ) : (
        <p>No hay resultados</p>
      )}
    </div>
  );
}

export default Buscador;
