const { Router } = require('express');
const get = require("../controllers/gets")


const router = Router();


router.get("/casos", get.getCasos(req, res))




module.exports = router; 