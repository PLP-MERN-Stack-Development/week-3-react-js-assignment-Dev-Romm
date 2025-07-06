import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setPosts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">API Data</h2>

      <input
        type="text"
        className="border p-2 w-full mb-4 dark:bg-gray-800 dark:text-white"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p className="text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-500">Failed to load posts.</p>}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      {!loading && filtered.length === 0 && (
        <p className="text-gray-400 mt-4">No posts match your search.</p>
      )}
    </div>
  );
};

export default ApiData;