const { Casos, Usuario, Provincias } = require("../db")

async function getUsuarios(req, res) {
    try {
        let vec = ["Buenos Aires", "Capital Federal", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
            "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]
        let provs = await Provincias.findAll({})
        if (provs.length === 0) {
            for (let i = 0; i < vec.length; i++) {
                await Provincias.findOrCreate({
                    where: { nombre: vec[i] }
                })
            }
        }

        const user = awaitUsuario.findAll()
        res.json(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}

function getCasos(req, res) {

}

module.exports = {
    getUsuarios,
    getCasos
}