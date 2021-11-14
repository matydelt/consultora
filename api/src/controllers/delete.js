const { Consulta, Turno } = require("../db");


async function deleteConsulta(req, res, next) {
  const { id } = req.params;
  try {
    await Consulta.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    next({ msg: "no se encontro la consulta" });
  }
}

async function cancelarTurno(req, res) {
  const { turnoId } = req.body;
  
  try {
    const turno = await Turno.findByPk(turnoId);
    turno.clienteId = null;
    await turno.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

module.exports = { deleteConsulta, cancelarTurno };
