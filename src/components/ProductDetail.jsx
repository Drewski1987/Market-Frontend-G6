import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail (){
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="singleProductContainer">

       <img/>
      <h1 className="singleRecipeTitle">{recipe.strMeal}</h1>
      <p className="singleRecipeCategory">
        {recipe.strCategory} | {recipe.strArea}
      </p>

      <h2 className="singleRecipeTitle">Ingredients</h2>
      <ul className="singleRecipeIngredients">
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="singleRecipeInstructionsTitle">Instructions</h2>
      <p className="singleRecipeInstructions">{recipe.strInstructions}</p>
    </div>
  );
};