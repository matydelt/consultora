const { Router } = require('express');
const router = Router();
const post = require("../controllers/post")
const get = require("../controllers/gets")
const put = require("../controllers/put")

router.post("/dia", (req, res) => post.postDia(req, res));

router.get("/dias", (req, res) => get.getDias(req, res));

router.get("/turno", (req, res) => get.getTurno(req, res));

router.post("/confirmar-turno", (req, res) => post.confirmarTurno(req, res));

// router.put("/dia", (req, res) => put.(req, res));

module.exports = router;