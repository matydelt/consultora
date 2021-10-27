const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const Casos = sequelize.define('casos', {
        juez: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numeroExpediente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        juzgado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        detalle: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM(["inicio", "prueba", "sentencia", "cerrado"]),
            allowNull: false
        },
    });

};