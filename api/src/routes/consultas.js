const { Router } = require("express");
const get = require("../controllers/gets");
const post = require("../controllers/post");
const router = Router();

router.get("/consultas", (req, res, next) => get.getConsultas(req, res, next));
router.post("/consultas", (req, res, next) => post.setConsulta(req, res, next));

module.exports = router;
