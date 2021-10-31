const { Casos, Usuario, Provincias, Materias, Abogado, Persona } = require("../db")


async function usuario(req, res) {
    try {
        console.log(req.body, req.params, req.query)
        const { eMail } = req.body;
        const user = await Usuario.findOne({ where: { eMail } });
        if (user) {
            const abogado = await Abogado.findByPk(user.abogadoId);
            const { firstName, lastName, dni, celular } = await Persona.findByPk(
                user.personaDni
            );
            if (abogado)
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
                    abogado,
                });
            else
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
        } else res.sendStatus(404);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
}


module.exports = {
    usuario
}