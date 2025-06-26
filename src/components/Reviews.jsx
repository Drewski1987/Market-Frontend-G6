import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Reviews({token}){
const [reviews, setReviews] = useState([]);
const[productId, setProductId] = useState(null);
const [comment, setComment] = useState("");
const [rating, setRating] = useState(1);
console.log(rating)
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

        async function handleSubmit(event){
            event.preventDefault();
            try{
            const res = await fetch("http://localhost:3000/reviews",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify({
                    rating: rating,
                    comment: comment,
                    product_id: productId
                    
                    
                }),
            })
            const data = await res.json();
            console.log(data);
                }catch(error){
                console.error("Error submitting review:", error);
                };
        }
        

    return (
<>  
       {token ?
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Submit a Review</h2>
                <label>
                    Product ID:
                    <input type="number" name="productId" onChange={(e) => setProductId(e.target.value)}required />
                </label>
                <br />
                <label>
                    Comment:
                    <textarea name="comment" onChange={(e) => setComment(e.target.value)}required></textarea>
                </label>
                <br />
                <label>
                    Rating:
                    <select name="rating" onChange={(e) => (setRating(e.target.value))}required>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit Review</button>
            </form>
       
        <div className="reviews">
            <h2 className="reviewTitle">Product Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id} className="reviewItem">
                        <Link to={`/products/${review.product_id}`} className="reviewLink">
                            Product ID: {review.product_id} - "{review.comment}" (Rating: {review.rating})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        :
        <div>
            <h2>Please log in to submit a review.</h2>
            <Link to="/users/login">Login</Link>
            
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
}
</>
    );

}

export default  Reviews