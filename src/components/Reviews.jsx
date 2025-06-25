import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Reviews(){

const [reviews, setReviews] = useState([]);
    useEffect(()=>
        async function fetchReviews() {
            try {
                const response = await fetch("http://localhost:3000/reviews");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data)
                setReviews(data)
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }, []);

    return (
        <div className="reviews">
            <h2>Product Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <Link to={`/products/${review.product_id}`}>
                            Product ID: {review.product_id} - "{review.comment}" (Rating: {review.rating})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default  Reviews