const { Router } = require('express');
const get = require("../controllers/gets")
const post = require("../controllers/post")
const put = require("../controllers/put")
const erase = require("../controllers/delete")
const { Materias } = require("../db")


const router = Router();


router.get("/provincias", (req, res) => get.getProvincias(req, res))

router.get("/materias", get.getMaterias)
// router.get("/materias", get.getMateriaAbogado)

router.post("/tickets/webhooks", (req, res) => post.postPago(req, res));

router.get("/items/find", get.items)
router.post("/items/create", post.items)
router.put("/items/modify", put.items)
router.delete("/items/delete", erase.items)

router.get("/about/find", get.about)
router.post("/about/create", post.about)
router.put("/about/modify", put.about)



module.exports = router; 