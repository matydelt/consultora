const { Casos, Usuarios, Provincias } = require("../db")

function getUsuarios(req, res) {
    let vec = ["Buenos Aires", "Capital Federal", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
        "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]
    for (let i = 0; i < vec.length; i++) {
        Provincias.Build({
            name: vec[i]
        })
    }
    console.log(req.body)
    // Usuarios.findOne() 
    res.sendStatus(200)
}

function getCasos(req, res) {

}

module.exports = {
    getUsuarios,
    getCasos
}