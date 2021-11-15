const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const Items = sequelize.define('items', {
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

};