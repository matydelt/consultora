const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Ticket = sequelize.define('ticket', {
    titulo: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    enlace: {
      type: DataTypes.TEXT
    },
    estatus: {
      type: DataTypes.TEXT
    }
  });

};
