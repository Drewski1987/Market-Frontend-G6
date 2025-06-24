import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail (){
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  console.log(product)

  return (
    <div className="singleProductContainer">
                <h3 className="productTitle">{product.title}</h3>
                <h4 className="productPrice">${product.price}</h4>
                <p className="productDescription">{product.description}</p>
    </div>
  );
};