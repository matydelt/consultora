const { Casos, Cliente, Usuario, Provincias, Materias, Abogado, Persona } = require("../db")
const { use } = require("../routes/utiles")


async function getUsuarios(req, res) {
    try {
        const user = await Usuario.findAll()
        res.json(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}
async function getProvincias(req, res) {
    try {
        console.log("aaaa")
        let vec = ["Buenos Aires", "Capital Federal", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
            "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"]
        let provs = await Provincias.findAll({})
        if (provs.length === 0) {
            for (let i = 0; i < vec.length; i++) {
                await Provincias.findOrCreate({
                    where: { nombre: vec[i] }
                })
            }
        }
        res.json(provs)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}
async function getMaterias(req, res) {
    try {
        let vec = ["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
            "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]
        let materias = await Materias.findAll({})
        if (materias.length === 0) {
            for (let i = 0; i < vec.length; i++) {
                await Materias.findOrCreate({
                    where: { nombre: vec[i] }
                })
            }
        }
        res.json(materias)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}
async function usuario(req, res) {
    const { eMail } = req.body;
    try {
        const user = await Usuario.findOne({ where: { eMail } })
        if (user) {
            const abogado = await Abogado.findByPk(user.abogadoId)
            const { firstName, lastName, dni, celular } = await Persona.findByPk(user.personaDni)
            if (abogado)
                res.send({ ...{ eMail: user.eMail, password: user.password, firstName, lastName, dni, celular }, abogado })
            else
                res.send({ ...{ eMail: user.eMail, password: user.password, firstName, lastName, dni, celular } })
        } else res.sendStatus(404)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}
async function getAbogados(req, res) {
    try {
        const user = await Usuario.findAll({})
        let abogados = []
        for (let i = 0; i < user.length; i++) {
            const { firstName, lastName, dni, celular } = await Persona.findByPk(user[i].personaDni)
            const abogado = await Abogado.findByPk(user[i].abogadoId)
            if (abogado)
                abogados.push({ ...{ eMail: user.eMail, password: user.password, firstName, lastName, dni, celular }, abogado })
        }
        res.send(abogados)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}

async function getAbogado(req, res) {
    const { eMail } = req.body
    try {
        let respuesta = []
        const user = await Usuario.findByPk(eMail)
        const { firstName, lastName, dni, celular } = await Persona.findByPk(user.personaDni)
        const abogado = await Abogado.findOne({ where: { id: user.abogadoId }, include: Cliente })
        if (abogado) {
            respuesta.push({ ...{ eMail: user.eMail, password: user.password, firstName, lastName, dni, celular }, abogado })
            respuesta.push(abogado.clientes.map(e => {
                Casos.findByPk(e.casoNumeroExpediente)
            }))
            res.json(respuesta)
        } else res.sendStatus(404)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}
<<<<<<< HEAD
async function getCasos(req, res) {
    const { numeroExpediente, estado, juez } = req.body
    try {
        const Cases = await Casos.findAll()
        console.log("Cases", Cases);
=======

async function getCasos(req, res) {
    const { numeroExpediente, estado, juez } = req.body
    try {
        const Cases = await  Casos.findAll()
        console.log("Cases",Cases);
>>>>>>> origin/k-b
        // const { firstName, lastName, dni, celular } = await Persona.findByPk(user.personaDni)
        // const abogado = await Abogado.findByPk(user.abogadoId)
        // if (abogado)
        //     res.json({ ...{ eMail: user.eMail, password: user.password, firstName, lastName, dni, celular }, abogado })
        // else res.sendStatus(404)
        return res.send({
<<<<<<< HEAD
            result: Cases,
=======
            result: Cases, 
>>>>>>> origin/k-b
            count: Cases.length
        })
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
    // console.log("Cases",Cases);
}


module.exports = {
    getUsuarios,
    getCasos,
    getProvincias,
    getMaterias,
    usuario,
    getAbogado,
    getAbogados
}