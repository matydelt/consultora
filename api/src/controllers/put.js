const { Casos, Usuario, Provincias, Materias, Consulta } = require("../db");

async function asignaConsulta(req, res, next) {
  const { consultaId, abogadoId } = req.body;
  try {
    const result = await Consulta.update(
      { abogadoId: `${abogadoId}` },
      { where: { id: `${consultaId}` } }
    );
    res.send(result);
  } catch (error) {
    next({ msg: "no se pudo asignar abogado" });
  }
}

module.exports = {
  asignaConsulta,
};
