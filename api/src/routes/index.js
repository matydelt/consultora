const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = {
    casos: require("./casos"),
    utiles: require("./utiles"),
    usuario: require("./usuario"),
    index: router
};
