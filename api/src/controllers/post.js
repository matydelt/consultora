const { uuid } = require("uuidv4");
const cloudinary = require('cloudinary');
require('../config/cloudinary');

const {
    Casos,
    Usuario,
    Persona,
    Cliente,
    Abogado,
    Consulta,
} = require("../db");
// let vec=["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
// "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]


// CLOUDINARY
async function subirImagen(req, res) {

    const { email } = req.body;

    try {
        let result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
            public_id: `${Date.now()}`,
            resource_type: 'auto' // jpeg, png
        });

        const user = await Usuario.findByPk(email)
        if (!user) return res.sendStatus(404);
        // const abogado = await Abogado.update( { imagen: result.secure_url},{ where:  { id: user.abogadoId } });
        const abogado = await Abogado.findOne({ where: { id: user.abogadoId } })
        if (!abogado) return res.sendStatus(404);

        if (abogado.imagen) {
            await cloudinary.uploader.destroy(abogado.imagen.substring(abogado.imagen.lastIndexOf('/') + 1).slice(0,-4), (err, result) => {
                // if(err) return res.json({err});
                console.log(err);
            });
        }

        abogado.imagen = result.secure_url;
        await abogado.save()

        return res.json({
            public_id: result.public_id,
            url: result.secure_url
        })

    } catch (error) {
        console.log(error);
    }
};

function eliminarImagen(req, res) {
    let imagenId = req.body.public_id;

    cloudinary.uploader.destroy(imagenId, (err, result) => {
        if (err) return res.json({ err });
        res.sendStatus(200);
    });
};


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
            client.setPersona(person)
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
                abogado.setPersona(persona)
                return res.sendStatus(304)
            }
            return res.sendStatus(404)
        } else res.sendStatus(404)

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



module.exports = {
    setUsuarios,
    setCasos,
    setAbogado,
    setConsulta,
    subirImagen,
    eliminarImagen
};
