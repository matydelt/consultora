const { Router } = require('express');
const get = require("../controllers/gets")
<<<<<<< HEAD
const post = require("../controllers/post")
=======
const post = require("../controllers/post") 
>>>>>>> origin/k-b


const router = Router();


router.get("/casos", (req, res) => get.getCasos(req, res))
router.post("/casos/new", (req, res) => post.casos(req, res))



module.exports = router; 