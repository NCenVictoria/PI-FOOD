const recipeRouter = require("express").Router();
const {
  getAllRecipes, 
  getRecipeById, 
  searchRecipeByName,
  createRecipe
} = require("./controllers/index.js");



// -------------------------------------------------------------------
 recipeRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const fuente = isNaN(id)?'bdd':'api';
    try {
      const recipe = await getRecipeById(id,fuente);
      res.status(200).json(recipe);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  // -----------todas las recetas------------------------------------------------------------
  recipeRouter.get('/', async (req, res) => {
    const { name } = req.query;
    try{ 

      const recipes = getAllRecipes();
      // console.log(recipes);
      // res.status(200).json(recipes)
      name ? await res.status(200).json(searchRecipeByName(name)) : await res.status(200).json(recipes);
    }catch(error){
      res.status(400).json({ error: error.message });
    }
  }
  );
// ------------------------------------------------------------------------------
  recipeRouter.post('/', async (req,res) => {
    try{
      const {name,summary,healthScore,stepByStep} = req.body;
      const newRecipe = await createRecipe(name,image,summary,healthScore,stepByStep);
      res.status(200).json(newRecipe)
    }catch (error){
      res.status(400).json({error:error.message});
    }
  })
  

  module.exports = recipeRouter;
