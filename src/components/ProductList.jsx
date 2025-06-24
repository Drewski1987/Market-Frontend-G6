import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  console.log(products)

  return (
      <div className="productGrid">
        {products.map((product) => (
          <div key={product.id} className="productCard">
              <img
                src={product.strProductThumb}
                alt={product.title}
                className="productImg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '../../public/GenericProductImg.jpg';
                }}
              />
              <div className="productDetails">
                <Link to={`/products/${product.id}`}>
                    <h3 className="productTitle">{product.title}</h3>
                </Link>
                <h4 className="productPrice">${product.price}</h4>
                <p className="productDescription">
                  {product.description}
                </p>
              </div>
          </div>
        ))}  
      </div>
  );
};