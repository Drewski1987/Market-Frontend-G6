import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail (){
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState([]);

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


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`http://localhost:3000/reviews/${id}`);
        const data = await res.json();
        console.log(data)
        setReview(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <>
    <div className="singleProductContainer">
                <h3 className="productTitle">{product.title}</h3>
                <h4 className="productPrice">${product.price}</h4>
                <p className="productDescription">{product.description}</p>
    </div>
    <div>
      {review.comment ? (
          <div key={review.product_id} className="review">
            <h5>"{review.comment}"</h5>
            <p>Rating: {review.rating}</p>
          </div>
      ) : (
        <p>No reviews available for this product.</p>
      )}
    </div>

  </>
 );
};