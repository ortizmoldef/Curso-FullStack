import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Componente que muestra la lista de noticias
function News() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("No se pudieron cargar las noticias");
        }
        const data = await res.json();
        setNewsList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <h1>Cargando noticias...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <h1>Lista de Noticias</h1>
      <ul>
        {newsList.map((news, index) => (
          <li key={news.id}>
            <Link to={`/new/${news.id}`}>Noticia {index + 1}: {news.title}</Link>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
