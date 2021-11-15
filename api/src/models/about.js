const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const About = sequelize.define('about', {
    sobreNosotros: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nuestraFilosofia: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contacto: {
      type: DataTypes.STRING
    },
    direccion: {
      type: DataTypes.STRING
    },
  });

};
