const { Casos, Usuario, Provincias, Materias } = require("../db")

async function getUsuarios(req, res) {
    try {


        const user = await Usuario.findAll()
        res.json(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}
async function getProvincias(req, res) {
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
    res.json(provs)
}
async function getMaterias(req, res) {
    let vec = ["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
        "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]
    let materias = await Materias.findAll({})
    console.log(materias.length)
    if (materias.length === 0) {
        for (let i = 0; i < vec.length; i++) {
            await Materias.findOrCreate({
                where: { nombre: vec[i] }
            })
        }
    }
    res.json(materias)
}

function getCasos(req, res) {

}

module.exports = {
    getUsuarios,
    getCasos,
    getProvincias,
    getMaterias
}