const { Casos, Usuario, Persona, Cliente, Abogado } = require("../db")
// let vec=["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
// "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]

async function setUsuarios(req, res) {
    const { eMail, firstName, dni, lastName, celular, password } = req.body
    try {
        let aux = await Usuario.findByPk(eMail)
        let aux2 = await Persona.findByPk(dni)
        if (!aux && !aux2) {
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
            const client = await Cliente.create({})

            person.setUsuario(user)
            client.setUsuario(user)
            res.sendStatus(200)
        }
        else
            res.sendStatus(500)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
async function setAbogado(req, res) {
    try {
        const { eMail } = req.body
        let user = await Usuario.findByPk(eMail)
        let persona = await Persona.findByPk(user.personaDni)
        if (!user.abogadoId) {
            const abogado = await Abogado.create({})
            if (user) {
                abogado.setUsuario(user)
                persona.setAbogado(abogado)
                return res.sendStatus(304)
            }
            return res.sendStatus(404)
        } else res.sendStatus(404)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function casos(req, res) {
    const { juez, numeroExpediente, juzgado, detalle, estado } = req.body;
    let Case = {
        juez,
        numeroExpediente,
        juzgado,
        detalle,
        estado
    }
    try {
        await Casos.create(Case)
        res.sendStatus(200)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
<<<<<<< HEAD

=======
}
async function casos(req, res) {
    const { juez, numeroExpediente, juzgado, detalle, estado } = req.body;
        let Case = { 
            juez,
            numeroExpediente,
            juzgado,
            detalle,
            estado
        }
        try {
            await Casos.create( Case )
            res.sendStatus(200)
        }
        catch (error){
            console.log(error)
            res.sendStatus(404)
        }
>>>>>>> origin/k-b
}

module.exports = {
    setUsuarios,
    casos,
    setAbogado
}