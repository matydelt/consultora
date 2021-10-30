const { Router } = require('express');
const get = require("../controllers/gets")
const post = require("../controllers/post")
const put = require("../controllers/put")

const { Abogado, Cliente, Usuario } = require("../db")


const router = Router();
router.get("/usuarios", (req, res) => get.getUsuarios(req, res)) // get all users 

router.get("/usuario", (req, res) => get.usuario(req, res)) // get user(for login)

router.get("/abogado/:eMail", (req, res) => get.getAbogado(req, res)) // get abogado

router.get("/abogados", (req, res) => get.getAbogados(req, res)) // get  abogados

router.get("/abogados", (req, res) => get.getAbogados(req, res)) // get  abogados

// router.get("/abogado", (req, res) => get.getAbogado(req, res)) // get  abogado

router.post("/cliente", async function (req, res) {    // set client to abogado
    const { cliente, abogado } = req.body
    try {
        let { abogadoId } = await Usuario.findByPk(abogado)
        let { clienteId } = await Usuario.findByPk(cliente)

        let clienteAux = await Cliente.findByPk(clienteId)
        let abogadoAux = await Abogado.findByPk(abogadoId)
        console.log(abogadoAux)
        if (clienteAux, abogadoAux) {
            abogadoAux.setClientes(clienteAux)
            res.sendStatus(200)
        } else res.sendStatus(404)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

router.post("/usuarios", (req, res) => post.setUsuarios(req, res))  //crea usuario

router.get("/usuario", (req, res) => get.usuario(req, res)); // get  user(for login)

router.post("/usuarios", (req, res) => post.setUsuarios(req, res)); //crea usuario

router.post("/usuario/abogado", (req, res) => post.setAbogado(req, res)); //set abogado

router.get("/abogados", (req, res) => get.getAbogados(req, res)); // get  abogados

router.get("/abogado", (req, res) => get.getAbogado(req, res)); // get  abogado


router.put("/abogado/:eMail", (req, res) => put.modificarAbogado(req, res)); // modificar abogado, actualizar foto etc



module.exports = router; 
