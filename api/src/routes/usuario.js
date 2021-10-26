const { Router } = require('express');
const get = require("../controllers/gets")
const post = require("../controllers/post")


const router = Router();

router.get("/usuarios", (req, res) => get.getUsuarios(req, res)) // get all users 

router.post("/usuarios", (req, res) => post.setUsuarios(req, res))  //crea usuario

router.post("/usuario/abogado", (req, res) => post.setAbogado(req, res)) //set abogado





module.exports = router; 