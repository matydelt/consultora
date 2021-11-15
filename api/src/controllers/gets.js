const {
  Casos,
  Usuario,
  Provincias,
  Materias,
  Abogado,
  Persona,
  Consulta,
  Cliente,
  Ticket,
  Dia,
  Turno,
  Op,
} = require("../db");
const turno = require("../models/turno");

async function getUsuarios(req, res) {
  try {
    const users = await Usuario.findAll();
    const usersData = users.map((user) => {
      const { updatedAt, ...usersData } = user.dataValues;
      usersData.createdAt = `${usersData.createdAt.getFullYear()}-${usersData.createdAt.getMonth() + 1
        }`;
      return usersData;
    });
    res.json(usersData);
  } catch (error) {
    console.error(error);
    return res.sendStatus(404);
  }
  try {
    const user = await Usuario.findAll();
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.sendStatus(404);
  }
}

async function getPersonas(req, res) {
  try {
    const user = await Persona.findAll();
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.sendStatus(404);
  }
}

async function getProvincias(req, res) {
  try {
    let vec = [
      "Buenos Aires",
      "Capital Federal",
      "Catamarca",
      "Chaco",
      "Chubut",
      "Córdoba",
      "Corrientes",
      "Entre Ríos",
      "Formosa",
      "Jujuy",
      "La Pampa",
      "La Rioja",
      "Mendoza",
      "Misiones",
      "Neuquén",
      "Río Negro",
      "Salta",
      "San Juan",
      "San Luis",
      "Santa Cruz",
      "Santa Fe",
      "Santiago del Estero",
      "Tierra del Fuego",
      "Tucumán",
    ];
    let provs = await Provincias.findAll({ where: {} });
    // let provs = await Provincias.findAll({ where: {}, include: Abogado });
    if (provs.length === 0) {
      for (let i = 0; i < vec.length; i++) {
        provs.push(
          await Provincias.findOrCreate({
            where: { nombre: vec[i] },
          })
        );
      }
    }
    res.json(provs);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
  let abogados = await Abogado.findAll({
    include: Provincias,
  });
  res.json(provs);
}
async function getMaterias(req, res) {
  try {
    let vec = [
      "Derecho Penal",
      "Derecho Civil",
      "Derecho Corporativo",
      "Derecho Comercial",
      "Derecho Familia",
      "Derecho Contencioso",
      "Derecho Administrativo",
      "Derecho Laboral",
      "Derecho Notarial",
    ];
    let materias = await Materias.findAll({ where: {}, include: Abogado, Persona });
    if (materias.length === 0) {
      for (let i = 0; i < vec.length; i++) {
        materias = await Materias.Create({ nombre: vec[i] });
      }
    }
    res.send(materias);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}

async function getPersonas(req, res) {
  try {
    const users = await Persona.findAll();
    const usersData = users.map((user) => {
      const { createdAt, updatedAt, ...usersData } = user.dataValues;
      return usersData;
    });
    res.json(usersData);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}

async function getAbogados(req, res) {
  try {
    const user = await Usuario.findAll({});
    let abogados = [];
    for (let i = 0; i < user.length; i++) {
      const { firstName, lastName, dni, celular } = await Persona.findByPk(
        user[i].personaDni
      );
      const abogado = await Abogado.findByPk(user[i].abogadoId);
      if (abogado)
        abogados.push({
          ...{
            eMail: user[i].eMail,
            firstName,
            lastName,
            dni,
            celular,
            slug: user[i].slug,
          },
          abogado,
        });
    }
    res.send(abogados);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}
async function getAbogado(req, res) {
  try {
    let { eMail } = req.body;
    let user = {};
    if (!eMail) {
      const { slug } = req.params
      user = await Usuario.findOne({ where: { slug } })
    } else {
      user = await Usuario.findByPk(eMail);
    }
    const { firstName, lastName, dni, celular } = await Persona.findByPk(user.personaDni)
    const { detalle, clientes, matricula, imagen, experiencia, estudios, materias, provincias } = await Abogado.findOne({ where: { id: user.abogadoId }, include: [Cliente, Materias, Provincias] })
    let abogado = { ...{ eMail: user.eMail, firstName, lastName, dni, celular, slug: user.slug }, detalle, imagen, experiencia, estudios, matricula }
    abogado.materias = []
    abogado.clientes = []
    abogado.provincias = []
    for (let i = 0; i < clientes.length; i++) {
      abogado.clientes.push(
        await Cliente.findOne({
          where: { id: clientes[i].id },
          attributes: ["id", "asunto"],
          include: [
            {
              model: Persona,
              attributes: ["firstName", "lastName", "dni", "celular"],
            },
            {
              model: Casos,
              attributes: [
                "juez",
                "numeroExpediente",
                "juzgado",
                "detalle",
                "estado",
              ],
            },
          ],
        })
      );
    }
    for (let i = 0; i < materias.length; i++) {
      abogado.materias.push(await Materias.findOne({
        where: { nombre: materias[i].nombre }
      }))
    }
    for (let i = 0; i < provincias.length; i++) {
      abogado.provincias.push(await Provincias.findOne({
        where: { nombre: provincias[i].nombre }
      }))
    }
    if (user) {
      res.json(abogado);
    } else res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
  const user = await Usuario.findByPk(eMail);
  const { firstName, lastName, dni, celular } = await Persona.findByPk(
    user.personaDni
  );
  const { detalle, clientes, imagen, experiencia, estudios } =
    await Abogado.findOne({
      where: { id: user.abogadoId },
      include: Cliente,
    });
  let abogado = {
    ...{ eMail: user.eMail, firstName, lastName, dni, celular },
    detalle,
    imagen,
    experiencia,
    estudios,
  };
  abogado.clientes = [];
  for (let i = 0; i < clientes.length; i++) {
    abogado.clientes.push(
      await Cliente.findOne({
        where: { id: clientes[i].id },
        attributes: ["id", "asunto"],
        include: [
          {
            model: Persona,
            attributes: ["firstName", "lastName", "dni", "celular"],
          },
          {
            model: Casos,
            attributes: [
              "juez",
              "numeroExpediente",
              "juzgado",
              "detalle",
              "estado",
            ],
          },
        ],
      })
    );
  }
  if (user) {
    res.json(abogado);
  } else res.sendStatus(404);
}

async function getCasos(req, res) {
  const { numeroExpediente, estado, juez, clienteId } = req.body;
  try {
    if (clienteId) {
      const casos = Casos.findAll({
        where: { clienteId },
      });
      res.json({
        result: casos,
        count: casos.length,
      });
      return;
    }

    let Cases = await Casos.findAll();

    if (numeroExpediente != "" && numeroExpediente != null) {
      Cases = Cases.filter((c) => {
        if (c.numeroExpediente == `${numeroExpediente}`) {
          return c;
        }
      });
    }

    if (estado != "" && estado != null) {
      Cases = Cases.filter((c) => {
        if (c.estado == `${estado}`) {
          return c;
        }
      });
    }

    if (juez != "" && juez != null) {
      Cases = Cases.filter((c) => {
        if (c.juez == `${juez}`) {
          return c;
        }
      });
    }

    return res.send({
      result: Cases,
      count: Cases.length,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
}

async function getConsultas(req, res, next) {
  const { nombre, apellido } = req.body;

  if (nombre) {
    try {
      const nombresDB = await Consulta.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`,
          },
        },
      });
      if (nombresDB !== null) {
        res.json(nombresDB);
      } else {
        res.status(404).send({ msg: "no se encuentra persona con ese nombre" });
      }
    } catch (error) {
      next(error);
    }
  }
  if (apellido) {
    try {
      const todasConsultas = await Consulta.findAll({
        order: [["createdAt", "DESC"]],
        include: Ticket,
      });
      res.json(todasConsultas);
    } catch (error) {
      console.log(error);
      next({ msg: "error al conseguir la persona por apellido" });
    }
  }
  if (apellido) {
    try {
      const todasConsultas = await Consulta.findAll();
      res.json(todasConsultas);
    } catch (error) {
      console.log(error);
      next({ msg: "error al conseguir la persona por apellido" });
    }
  }

  try {
    const todasConsultas = await Consulta.findAll({
      order: [["createdAt", "DESC"]],
      include: Ticket,
    });

    const todasConsultasAbogado = [];
    for (var i=0; i < todasConsultas.length; i++) {
      var consulta = todasConsultas[i];
      if (!consulta.abogadoId) {
        todasConsultasAbogado.push(consulta);
        continue;
      }
      const abogado = await Usuario.findOne({
        where:{abogadoId: consulta.abogadoId}
      })
      const { firstName, lastName, dni, celular } = await Persona.findByPk(
        abogado.personaDni
      );
      consulta.dataValues.abogado = {
        firstName: firstName,
         lastName: lastName,
         dni: dni,
         celular: celular
      }
      todasConsultasAbogado.push(consulta);
    }
    res.json(todasConsultasAbogado);
  } catch (error) {
    console.log(error)
    next({ msg: "error en traer consultas de la DB" });
  }

}

//MP
async function getTickets(req, res, next) {
  const { id, enlace } = req.body;
  console.log("id", req.body);
  if (!!id && id !== null) {
    try {
      const ticket = await Ticket.findByPk(id);
      console.log("ticket", ticket);
      res.json(ticket);
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  } else if (!!enlace && enlace !== null) {
    try {
      const ticket = await Ticket.findOne({ where: { enlace: enlace } });
      console.log("ticket", ticket);
      res.json(ticket);
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  } else {
    try {
      const ticket = await Ticket.findAll();
      res.json(ticket);
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  }
}

async function getAllCasos(req, res, next) {
  try {
    const cliente = await Cliente.findAll({ where: {}, include: [{ model: Abogado, include: Persona }, { model: Casos }, { model: Persona }] })

    if (cliente.length > 0)
      return res.json(cliente)
    else return res.sendStatus(404)
  } catch (e) {
    console.log(e)
    res.sendStatus(404)
  }
}
async function getDias(req, res) {

  const { abogadoId } = req.query;
  let dias = [];
  try {
    if (abogadoId) {
      dias = await Dia.findAll({
        where: {
          fecha: { [Op.gte]: new Date().getTime() },
          abogadoId
        },
        include: Turno,
        order: [
          ['fecha', 'DESC']
        ],
      });

    } else {
      dias = await Dia.findAll({
        include: Turno,
        order: [
          ['fecha', 'DESC']
        ],
      });
    }

    return res.json(dias);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

};

module.exports = {
  getUsuarios,
  getPersonas,
  getCasos,
  getProvincias,
  getMaterias,
  getConsultas,
  getAbogados,
  getAbogado,
  getPersonas,
  getTickets,
  getAllCasos,
  // getUsuario,   
  getDias
};
