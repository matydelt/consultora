const { Router } = require('express');
const get = require("../controllers/gets")


const router = Router();

router.get("/usuarios", (req, res) => get.getUsuarios(req, res))
router.post("/usuarios", (req, res) => get.getUsuarios(req, res))





module.exports = router; 