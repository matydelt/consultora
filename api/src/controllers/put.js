const { Casos, Usuario, Persona, Provincias, Materias, Abogado } = require("../db")



async function modificarAbogado(req, res) {

    const { eMail } = req.params;

    const { nombre, apellido, detalle, estudios, experiencia } = req.body;

    try {
        const user = await Usuario.findByPk(eMail);
        if(!user) return res.sendStatus(404);
        const persona = await Persona.findByPk(user.personaDni);
        if(!persona) return res.sendStatus(404);
        const abogado = await Abogado.findOne({ where: { id: user.abogadoId } });
        if(!abogado) return res.sendStatus(404);

        persona.firstName = nombre;
        persona.lastName = apellido;
        abogado.detalle = detalle;
        abogado.estudios = estudios;
        abogado.experiencia = experiencia;

        await persona.save();
        await abogado.save();
    
        return res.json(abogado);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msj: 'Ocurrió un error al modificar al abogado'
        });
    }



};


module.exports = {
    modificarAbogado,
}