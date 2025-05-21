import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); // get dynamic route parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
      <p>{product.description}</p>
      <p><strong>Price: </strong>${product.price}</p>
      <Link to="/products">← Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
