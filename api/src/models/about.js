const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const About = sequelize.define('about', {
    sobreNosotros: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NuestraFilosofia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contacto: {
      type: DataTypes.TEXT
    },
    direccion: {
      type: DataTypes.TEXT
    },
  });

};
