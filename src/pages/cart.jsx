import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setStore(response.data.products);
      })
      .catch((error) => {
        console.error('Axios error:', error);
      });
  }, []);

  return (
    <div className="p-6 bg-black">
      <h1 className="text-4xl text-center font-bold text-green-600 mb-4">Daraz</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {store.map((product) => (
          <Link to={`/cartdetail/${product.id}`} key={product.id}>
            <li className="bg-gray-100 p-4 shadow rounded-2xl list-none">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-contain mb-2"
              />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p className="text-green-600 font-semibold">
                Discount: {product.discountPercentage}%
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default App;
