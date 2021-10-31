const { uuid } = require("uuidv4");
const {
    Casos,
    Usuario,
    Persona,
    Cliente,
    Abogado,
    Consulta,
    Admin
} = require("../db");
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
            // client.setPersona(person)
            res.sendStatus(200)
        }
        else
            res.sendStatus(500)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
// async function setPersona(req, res, next) {
//     const { firstName, dni, lastName, celular } = req.body
//     let persona = { firstName: firstName, dni: dni, lastName: lastName, celular: celular }
//     console.log("Persona");
//     console.log("lo mande yo firstName",firstName);
//     console.log("lo mande yo dni",dni);
//     console.log("lo mande yo lastName",lastName);
//     console.log("lo mande yo celular",celular);

//     try {
//         Persona.create( persona )
//         res.sendStatus(200)
//     }
//     catch{
//         console.log(error)
//         res.sendStatus(500)
//     }
// }
async function setAbogado(req, res) {
    try {
        const { eMail, flag } = req.body
        let user = await Usuario.findByPk(eMail)
        let persona = await Persona.findByPk(user.personaDni)
        if (flag) {
            if (!user.abogadoId) {
                const abogado = await Abogado.create({})
                if (user) {
                    abogado.setUsuario(user)
                    abogado.setPersona(persona)
                    return res.sendStatus(200)
                }
                return res.sendStatus(404)
            } else return res.sendStatus(404)
        } else {
            let abogado = await Abogado.findByPk(user.abogadoId)
            await abogado.destroy()
            abogado = await Abogado.findByPk(user.abogadoId)
            if (!abogado) return res.sendStatus(200)
            else return res.sendStatus(500)
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    return res.sendStatus(404);
}


async function setCasos(req, res) {
    try {
        const { juez, numeroExpediente, juzgado, detalle, estado, eMail } = req.body;
        const caso = await Casos.create({ juez, numeroExpediente, juzgado, detalle, estado })
        const { clienteId } = await Usuario.findByPk(eMail)
        const cliente = await Cliente.findByPk(clienteId)
        cliente.setCasos(caso)
        res.sendStatus(200)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}
async function setConsulta(req, res, next) {
    const { nombre, apellido, telefono, email, mensaje } = req.body;
    if (nombre && apellido && telefono && email && mensaje) {
        try {
            const consulta = {
                id: uuid(),
                nombre,
                apellido,
                telefono,
                email,
                mensaje,
            };
            await Consulta.create(consulta);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }
}
async function setAdmin(req, res) {
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
            const admin = await Admin.create({})

            person.setUsuario(user)
            admin.setUsuario(user)
            // client.setPersona(person)
            res.sendStatus(200)
        }
        else
            res.sendStatus(500)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}
module.exports = {
    setUsuarios,
    setCasos,
    setAbogado,
    setConsulta,
    // setPersona,
    setAdmin
};
