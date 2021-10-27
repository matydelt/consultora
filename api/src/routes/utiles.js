const { Router } = require('express');
const get = require("../controllers/gets")
const { Materias } = require("../db")


const router = Router();


router.get("/provincias", (req, res) => get.getProvincias(req, res))

router.get("/materias", async function getMaterias(req, res) {
    try {
        let vec = ["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
            "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]
        let materias = await Materias.findAll({})
        if (materias.length === 0) {
            for (let i = 0; i < vec.length; i++) {
                await Materias.findOrCreate({
                    where: { nombre: vec[i] }
                })
            }
        }
        res.json(materias)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
})




module.exports = router; 