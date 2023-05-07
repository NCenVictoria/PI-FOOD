
const dietsRouter = require('express').Router();

dietsRouter.get('/', async (req, res) => {
    
    res.status(200).send('envio todas las dietas');
  }
  );

module.exports =  dietsRouter;



    

