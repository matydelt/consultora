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
            if (abogado) {
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
        } else{ 
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
async function actualizarAbogado(req, res, next) { }

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

        await persona.save();
        await abogado.save();

        abogado = { ...{ eMail: user.eMail, firstName: persona.firstName, lastName: persona.lastName }, dataValues:  {abogado} }
        
        return res.json(abogado);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msj: 'Ocurrió un error al modificar al abogado'
        });
    }
    
    

};

module.exports = {
    usuario,
    asignaConsulta,
    modificarAbogado,
};
