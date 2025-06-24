// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Home() {
//   const [store, setStore] = useState([]);

//   useEffect(() => {
//     axios.get('https://dummyjson.com/carts')
//       .then((res) => setStore(res.data.carts))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       {store.map((cart) => (
//         <div key={cart.id} className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Cart ID: {cart.id}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {cart.products.map((product) => (
//               <Link to={`/product/${product.id}`} key={product.id}>
//                 <div className="bg-white p-4 rounded shadow hover:scale-105 transition">
//                   <img src={product.thumbnail} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
//                   <h3 className="text-lg font-bold">{product.title}</h3>
//                   <p>Price: ${product.price}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;
