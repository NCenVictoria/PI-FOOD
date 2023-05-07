const router = require('express').Router();
const recipeRouter = require("./recipeRouter.js");
const dietsRouter = require("./dietsRouter.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipeRouter);
router.use('/diets', dietsRouter);


module.exports = router;
