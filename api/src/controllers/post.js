const { uuid } = require("uuidv4");
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

async function setUsuarios(req, res) {
  const { eMail, firstName, dni, lastName, celular, password } = req.body;
  try {
    const user = await Usuario.create({
      eMail,
      password,
    });
    const person = await Persona.create({
      firstName,
      dni,
      lastName,
      celular,
    });
    const client = await Cliente.create({});

    person.setUsuario(user);
    client.setUsuario(user);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
async function setAbogado(req, res) {
  try {
    const { eMail } = req.body;
    let user = await Usuario.findByPk(eMail);
    const abogado = await Abogado.create({});
    if (user) {
      abogado.setUsuario(user);
      return res.sendStatus(304);
    }
    return res.sendStatus(404);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

function casos(req, res) {}

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
  casos,
  setAbogado,
  setConsulta,
};
