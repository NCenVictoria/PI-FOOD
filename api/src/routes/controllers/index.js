const axios = require('axios');
const {API_KEY} = process.env;
const {Recipe,Diets} = require ('../../db.js');
const { food } = require("sequelize");

const data=require('../../../recipes.json');
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=7e7654664f7245f4bfe325f7fb858a72&addRecipeInformation=true&number=1`
// ------------------------------------------------------------------
async function  getAllRecipes () {
    const getData = await axios.get(URL);
    // const getData = await axios(`https:api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const response = await getData.data.results.map(el=>{
        return{
          id: el.id,
          name: el.title,
          summary: el.summary,
          healthScore: el.healthScore,
          steps: el.analyzedInstructions[0]?.steps?.map((item) => item.step),
          image: el.image,
        }
    })
    // console.log(response)
    return response;
}

// ------------------------------------------------------------------
const getRecipeById = async (id, fuente) => {
  if (fuente === "api") {
    // const API = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    const API = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7e7654664f7245f4bfe325f7fb858a72`);

  return {
    name: API.data.title,
    summary: API.data.summary,
    score: API.data.spoonacularScore,
    healthScore: API.data.healthScore,
    steps: API.data.analyzedInstructions[0]?.steps.map(e => {
      return {
          number: e.number,
          step: e.step
      }
  }),
    image: API.data.image,
    }
  }else{
    return await Recipe.findAll({
      include: {
          model: Diets,
          attributes: ['name'],
          through: {
              attributes: [],
          }
      }
  });
  
  }
};
  

// ---------------------------------------------------------
const searchRecipeByName = async (name) => {
  // const databaseRecipes = await Recipe.findAll({
  //   include: {
  //     model: Diets,

  //     attributes: ["name"],
  //     through: {
  //       attributes: [],
  //     },
  //   },
  //   where: { name: { [food.substring]: name.toLowerCase() } },
  // });

  const apiRecipe = await axios.get(URL);
    
  const API = apiRecipe.data.results.map((el) => {
    return{
      id: el.id,
      name: el.title,
      summary: el.summary,
      healthScore: el.healthScore,
      steps: el.analyzedInstructions[0]?.steps?.map((item) => item.step),
      image: el.image,
    }
  });

  const filteredApi = API.filter((recipe) =>
    recipe.name.toLowerCase().includes(name.toLowerCase())
  );
console.log('ok')
  return filteredApi;
};

 const createRecipe = async (name,image,summary,healthScore,stepByStep)=> { 

   await Recipe.create({name,image,summary,healthScore,stepByStep});
  }
  
  module.exports={
    getAllRecipes, getRecipeById, searchRecipeByName, createRecipe
  }



