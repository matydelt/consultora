const { Router } = require('express');
const get = require("../controllers/gets")
const post = require("../controllers/post")


const router = Router();

router.get("/casos", (req, res) => get.getCasos(req, res))
router.post("/casos/new", (req, res) => post.setCasos(req, res))



module.exports = router; 