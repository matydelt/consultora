const { Router } = require('express');
const get = require("../controllers/gets")
const post = require("../controllers/post")
const put = require("../controllers/put")

const { Abogado, Cliente, Usuario } = require("../db")


const router = Router();

router.get("/abogados", (req, res) => get.getAbogados(req, res)); // get  abogados

router.get("/personas", (req, res) => get.getPersonas(req, res)); // get  personas

router.get("/usuarios", (req, res) => get.getUsuarios(req, res)) // get all users 

router.get("/personas", (req, res) => get.getPersonas(req, res)); //busca personas

router.get("/abogado/:slug", (req, res) => get.getAbogado(req, res)) // get abogado 

router.post("/adm", (req, res) => post.setAdmin(req, res)) // set adm

router.post("/usuario/abogado", (req, res) => post.setAbogado(req, res)); //set abogado

router.post("/cliente", async function (req, res) {    // set client to abogado
    const { cliente, abogado } = req.body
    try {
        let { abogadoId } = await Usuario.findByPk(abogado)
        let { clienteId } = await Usuario.findByPk(cliente)
        console.log(abogadoId)
        let clienteAux = await Cliente.findByPk(clienteId)
        let abogadoAux = await Abogado.findByPk(abogadoId)
        if (clienteAux, abogadoAux) {
            abogadoAux.addClientes(clienteAux)
            res.sendStatus(200)
        } else res.sendStatus(404)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})


router.post("/usuario", (req, res) => post.setUsuarios(req, res))  //crea usuario

router.post("/forzar-reinicio-password", (req, res) => post.reiniciarPassword(req, res))


router.post("/persona", (req, res) => post.setPersona(req, res)); //crea persona

router.put("/bann", put.setBann)//bannea usuario

router.put("/usuario", (req, res) => put.usuario(req, res)); // get  user(for login)

router.put("/abogado", (req, res) => put.getAbogado(req, res)); // get  abogado


router.put("/abogado/:eMail", (req, res) => put.modificarAbogado(req, res)); // modificar abogado, actualizar foto etc

router.put("/cliente/actualizar", put.CLienteAbogado)

module.exports = router; 
