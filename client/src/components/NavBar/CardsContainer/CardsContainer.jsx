import React from 'react';
import Card from '../Card/Card';

const recipes = [
  {
    id: 782585,
    title: "Cannellini Bean and Asparagus Salad with Mushrooms",
    image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    
  },
  {
    id: 716426,
    title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
     imageType: "jpg"
  },
  {
    id: 715497,
    title: "Berry Banana Breakfast Smoothie",
    image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    imageType: "jpg"
  },
  {
    id: 715415,
    title: "Red Lentil Soup with Chicken and Turnips",
    image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
    imageType: "jpg"
  }
]



export default function CardsContainer() {
  return (
    <div>CardsContainer= tomara un array de usuarios y por cada receta renderizar un componente card 
      {recipes.map(r=>{
        return <Card
          image={r.image}
          name={r.title}
               />
        }
        )}
    </div>
  )
}
