const { DataTypes } = require('sequelize');

module.exports= (sequelize)=>{

    sequelize.define('diets',{
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
          
    },
     
    {
      timestamps: false,
    }
        
    );
}