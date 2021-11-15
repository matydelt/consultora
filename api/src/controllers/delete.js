const { Consulta, Items } = require("../db");

async function deleteConsulta(req, res, next) {
  const { id } = req.params;
  console.log(id);
  try {
    await Consulta.destroy({ where: { id: `${id}` } });
    res.sendStatus(200);
  } catch (error) {
    next({ msg: "no se encontro la consulta" });
  }
}
async function items(req, res) {
  try {
    const { item } = req.body
    const actualItem = await Items.findByPk(item)
    if (items.length === 0) return res.sendStatus(404)
    await actualItem.destroy();
    return res.sendStatus(200)
  } catch (e) {
    console.log(e)
    return res.sendStatus(404)
  }
}


module.exports = { deleteConsulta, items };
