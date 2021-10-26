const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const Materias = sequelize.define('materias', {
        nombre: {
            type: DataTypes.ENUM("Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
                "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"),
            allowNull: false,
            primaryKey: true
        },
    });

};