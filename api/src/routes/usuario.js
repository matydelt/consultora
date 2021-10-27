const { Router } = require('express');
const get = require("../controllers/gets")
const post = require("../controllers/post")


const router = Router();

router.get("/usuarios", (req, res) => get.getUsuarios(req, res)) // get all users 

router.get("/usuario", (req, res) => get.usuario(req, res)) // get  user(for login)

router.get("/abogados", (req, res) => get.getAbogados(req, res)) // get  abogados

router.get("/abogado", (req, res) => get.getAbogado(req, res)) // get  abogado

router.post("/cliente", (req, res) => post.setCliente(req, res))

router.post("/usuarios", (req, res) => post.setUsuarios(req, res))  //crea usuario

router.post("/usuario/abogado", (req, res) => post.setAbogado(req, res)) //set abogado







module.exports = router; 