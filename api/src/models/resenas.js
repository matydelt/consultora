const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Resena = sequelize.define("resena", {
    titulo: {
      type: DataTypes.TEXT,
    },
    mensaje: {
      type: DataTypes.TEXT,
    },
    puntuacion: {
      type: DataTypes.TEXT,
    },
  });
};
