const { Router } = require('express');
const get = require("../controllers/gets")


const router = Router();

router.get("/usuarios", get.getUsuarios(res))




module.exports = router; 