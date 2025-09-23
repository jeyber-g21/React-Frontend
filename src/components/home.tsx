import { useEffect, useState } from "react";

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
          <li key={u._id}>
            {u.title} - {u.image}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
