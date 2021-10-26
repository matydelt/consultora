const { Casos, Usuarios } = require("../db")

function usuarios(req, res) {
    const { eMail } = req.body
    const user = Usuarios.Build({
        eMail: eMail
    })
    console.log(user)
    res.sendStatus(200)
}

function casos(req, res) {

}

module.exports = {
    usuarios,
    casos
}