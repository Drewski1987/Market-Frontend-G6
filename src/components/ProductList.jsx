import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="productGrid">
        {products &&
        products.map((product) => {
          <div key={product.id} className="productCard">
              {/* <img
                src={product.strProductThumb}
                alt={product.title}
                className="productImg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "../../public/GenericProductImg.png";
                }}
              /> */}
              <div className="productDetails">
                <h3 className="productTitle">{product.title}</h3>
                <h4 className="productPrice">{product.price}</h4>
                <p className="productDescription">
                  {product.description}
                </p>
              </div>
            <Link to={`/products/${product.id}`}></Link>
          </div>
        })}  
      </div>
    </>
  );
};