import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CartDetail() {
  const { cartId } = useParams(); // this is actually a product ID now
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${cartId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error fetching product:', err));
  }, [cartId]);

  if (!product) return <h2>Loading product...</h2>;

  return (
    <div className="p-6 max-w-xl bg-black mx-auto">
      <Link to="/" className="text-blue-600 underline mb-6 inline-block">← Back to Home</Link>
      <div className='border-2 p-8 rounded bg-white border-gray-300'>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="h-64 object-contain  mx-auto mb-4" />
      <p className="text-lg">Price: ${product.price}</p>
      <p className="text-green-600 font-semibold">Discount: {product.discountPercentage}%</p></div>
      <p className="mt-2 text-gray-600">{product.description}</p>
    </div>
  );
}

export default CartDetail;
