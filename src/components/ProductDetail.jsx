import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetail (){
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState([]);
  const userId = localStorage.getItem("userId")
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
  }, []);
console.log(review)
  return (
    <>
    <div className="singleProductContainer">
        <h3 className="productTitle">{product.title}</h3>\
        <img className="productImg" src={product.imageurl}/>
        <div>
          <Link to={`/orders/${userId}`}>
            <button>Order Here</button>
          </Link>    
        </div>
        <h4 className="productPrice">${product.price}</h4>
        <p className="productDescription">{product.description}</p>

    </div>
    <div>
      {review.length > 0  ? 
      review.map((rev)=> (
          <div key={rev.id} className="reviews">
            <ul>
              <li>
            <h5>"{rev.comment}"</h5>
            <p>Rating: {rev.rating}</p>
            </li>
            </ul>
          </div>))
        : 
        <p style="color: #ffffff">No reviews available for this product.</p>
      }
      </div>

  </>
 );
};