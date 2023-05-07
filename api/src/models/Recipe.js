const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID, //universally unique identifier (UUID)
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 //A version 4 UUID is randomly generated, 4 bits are used to indicate version 4, and 2 or 3 bits to indicate the variant 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image : {
      type: DataTypes.STRING
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthScore : {
      type: DataTypes.INTEGER,
      defaultValue: 20
    },
    stepByStep : {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
 
  {
    timestamps: false,
  });
};
