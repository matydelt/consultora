const { Casos, Usuario, Persona } = require("../db")
// let vec=["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
// "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]

async function usuarios(req, res) {
    const { eMail, firstName, dni, lastName, celular, password } = req.body
    try {
        const user = await Usuario.create({
            eMail,
            password
        })
        const person = await Persona.create({
            firstName,
            dni,
            lastName,
            celular
        })

        person.setUsuario(user)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}
async function setAbogado(req, res) {
    try {

        const { eMail } = req.body
        let user = await Usuario.findByPk(eMail)

    } catch (error) {
        console.log(error)
    }
}

function casos(req, res) {

}

module.exports = {
    usuarios,
    casos,
    setAbogado
}