const { Casos, Usuario, Provincias, Materias, Abogado, Persona, Cliente } = require("../db")


async function usuario(req, res) {
    try {
        // console.log(req.body, req.params, req.query)
        const { eMail } = req.body;
        const user = await Usuario.findOne({ where: { eMail } });
        if (user) {
            console.log(user)
            const abogado = await Abogado.findByPk(user.abogadoId);
            const { firstName, lastName, dni, celular } = await Persona.findByPk(
                user.personaDni
            );
            if (abogado) {
                res.send({
                    ...{
                        eMail: user.eMail,
                        password: user.password,
                        abogadoId: user.abogadoId,
                        adminId: user.adminId,
                        slug: user.slug,
                        firstName,
                        lastName,
                        dni,
                        celular,
                    },
                    abogado,
                });
            } else
                res.send({
                    ...{
                        eMail: user.eMail,
                        password: user.password,
                        abogadoId: user.abogadoId,
                        adminId: user.adminId,
                        firstName,
                        lastName,
                        dni,
                        celular,

                    },
                });
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function asignaConsulta(req, res, next) {
    const { consultaId, abogadoId } = req.body;
    try {
        const result = await Consulta.update(
            { abogadoId: abogadoId },
            { where: { id: consultaId } }
        );
        res.send(result);
    } catch (error) {
        next({ msg: "no se pudo asignar abogado" });
    }
}

// asigna materia y matricula al abogado

module.exports = {
    usuario,
    asignaConsulta,
    modificarAbogado
};

async function modificarAbogado(req, res) {

    const { eMail } = req.params;
    const { nombre, apellido, detalle, estudios, experiencia } = req.body;

    try {
        const user = await Usuario.findByPk(eMail);
        if (!user) return res.sendStatus(404);
        const persona = await Persona.findByPk(user.personaDni);
        if (!persona) return res.sendStatus(404);
        let abogado = await Abogado.findOne({ where: { id: user.abogadoId } });
        if (!abogado) return res.sendStatus(404);

        persona.firstName = nombre;
        persona.lastName = apellido;
        abogado.detalle = detalle;
        abogado.estudios = estudios;
        abogado.experiencia = experiencia;
        user.slug = `${nombre}-${apellido}`

        Promise.all([await persona.save(), await abogado.save(), await user.save()]);

        return res.send({
            ...{
                eMail: user.eMail,
                password: user.password,
                abogadoId: user.abogadoId,
                adminId: user.adminId,
                slug: user.slug,
                firstName: persona.firstName,
                lastName: persona.lastName,
                dni: persona.dni,
                celular: persona.celular,
            },
            abogado,
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }



};

async function getAbogado(req, res) {
    try {
        console.log(req.body)
        let { eMail } = req.body
        if (!eMail) {
            eMail = req.params
        }
        const user = await Usuario.findByPk(eMail)
        const { firstName, lastName, dni, celular } = await Persona.findByPk(user.personaDni)
        const { detalle, clientes, imagen, experiencia, estudios } = await Abogado.findOne({ where: { id: user.abogadoId }, include: Cliente })
        let abogado = { ...{ eMail: user.eMail, firstName, lastName, dni, celular }, detalle, imagen, experiencia, estudios }
        abogado.clientes = []
        for (let i = 0; i < clientes.length; i++) {
            abogado.clientes.push(await Cliente.findOne({
                where: { id: clientes[i].id }, attributes: ["id", "asunto"], include: [{ model: Persona, attributes: ["firstName", "lastName", "dni", "celular"] },
                {
                    model: Casos, attributes: ["juez", "numeroExpediente", "juzgado", "detalle", "estado",
                    ]
                }]
            }))
        }
        if (user) {
            res.json(abogado)
        } else res.sendStatus(404)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}


module.exports = {
    usuario,
    asignaConsulta,
    modificarAbogado,

    getAbogado
}



