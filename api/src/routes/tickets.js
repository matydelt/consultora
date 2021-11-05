const { Router } = require('express');
const router = Router();
const post = require("../controllers/post")

router.post("/tickets/new", (req, res) => post.postTickets(req, res));
// router.get("/usuarios", (req, res) => get.getUsuarios(req, res))

module.exports = router;