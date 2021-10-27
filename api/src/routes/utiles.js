const { Router } = require('express');
const get = require("../controllers/gets.js")


const router = Router();


router.get("/provincias", (req, res) => get.getProvincias(req, res))

router.get("/materias", (req, res) => get.getMaterias(req, res))




module.exports = router; 