import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Products Page</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <img src={product.image} alt={product.title} width="100" height="100" />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
