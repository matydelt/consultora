const { uuid } = require("uuidv4");
const cloudinary = require('../config/cloudinary');
const enviarEmail = require('../email/email');

const {
  Casos,
  Usuario,
  Persona,
  Cliente,
  Abogado,
  Consulta,
  Admin
} = require("../db");
// let vec=["Derecho Penal", "Derecho Civil", "Derecho Corporativo", "Derecho Comercial", "Derecho Familia", "Derecho Contencioso",
// "Derecho Administrativo", "Derecho Laboral", "Derecho Notarial"]


// CLOUDINARY
async function subirImagen(req, res) {

  const { email } = req.body;

  console.log(req.files);

  try {
    let result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: 'auto' // jpeg, png
    });

    const user = await Usuario.findByPk(email)
    if (!user) return res.sendStatus(404);
    const abogado = await Abogado.findOne({ where: { id: user.abogadoId } })
    if (!abogado) return res.sendStatus(404);

    if (abogado.imagen) {
      await cloudinary.uploader.destroy(abogado.imagen.substring(abogado.imagen.lastIndexOf('/') + 1).slice(0, -4), (err, result) => {
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

async function eliminarImagen(req, res) {
  const { public_id, email } = req.body;

  try {
    await cloudinary.uploader.destroy(public_id, (err, result) => {
      if (err) return res.json({ err });
    });

    const user = await Usuario.findByPk(email)
    if (!user) return res.sendStatus(404);
    const abogado = await Abogado.findOne({ where: { id: user.abogadoId } })
    if (!abogado) return res.sendStatus(404);
    abogado.imagen = '';
    await abogado.save()
  } catch (error) {
    return res.sendStatus(500);
  }

};


async function setUsuarios(req, res) {
  const { eMail, firstName, dni, lastName, celular, password } = req.body;

  // console.log(eMail, firstName, dni, lastName, celular, password )
  try {
    let aux = await Usuario.findByPk(eMail);
    let aux2 = await Persona.findByPk(dni);
    if (!aux && !aux2) {
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
      client.setPersona(person);
      
      res.sendStatus(200);
    } else res.sendStatus(500);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
async function setAbogado(req, res) {
  try {
    const { eMail, flag } = req.body
    let user = await Usuario.findByPk(eMail)
    let persona = await Persona.findByPk(user.personaDni)
    if (flag) {
      if (!user.abogadoId) {
        const abogado = await Abogado.create({})
        console.log(persona.firstName, persona.lastName);
        if (user) {
          user.slug = `${persona.firstName}-${persona.lastName}`;
          abogado.setUsuario(user)
          abogado.setPersona(persona)

          return res.json({abogado})
          // return res.sendStatus(200)
        }
        return res.sendStatus(404)
      } else return res.sendStatus(404)
    } else {
      let abogado = await Abogado.findByPk(user.abogadoId)
      await abogado.destroy()
      abogado = await Abogado.findByPk(user.abogadoId)
      if (!abogado) return res.sendStatus(200)
      else return res.sendStatus(500)
    }

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
  return res.sendStatus(404);
}

async function setCasos(req, res) {
  try {
    const {
      juez,
      numeroLiquidacion,
      numeroExpediente,
      juzgado,
      detalle,
      estado,
      eMail,
      medidaCautelar,
      trabaAfectiva,
      vtoMedidaCautelar,
      vtoTrabaAfectiva,
      jurisdiccion
    } = req.body;


    const caso = await Casos.create({
      trabaAfectiva,
      medidaCautelar,
      numeroLiquidacion,
      juez,
      numeroLiquidacion,
      numeroExpediente,
      juzgado,
      detalle,
      estado,
      medidaCautelar,
      trabaAfectiva,
      vtoMedidaCautelar,
      vtoTrabaAfectiva,
      jurisdiccion
    });
    const { clienteId } = await Usuario.findByPk(eMail);
    const cliente = await Cliente.findByPk(clienteId);
    cliente.setCasos(caso);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}

async function setConsulta(req, res, next) {
  const { nombre, apellido, dni, telefono, email, mensaje } = req.body;
  if (nombre && apellido && dni && telefono && email && mensaje) {
    try {
      const consulta = {
        id: uuid(),
        nombre,
        apellido,
        dni,
        telefono,
        email,
        mensaje,
      };
      await Consulta.create(consulta);

      enviarEmail.send({
        email,
        mensaje,
        subject: 'Consulta recibida',
        htmlFile: 'consulta.html'
    });

      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
}
async function setAdmin(req, res) {
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
      const admin = await Admin.create({})

      person.setUsuario(user)
      admin.setUsuario(user)
      // client.setPersona(person)
      res.sendStatus(200)
    }
    else if (!aux.adminId) {
      const admin = await Admin.create({})
      admin.setUsuario(aux)
      res.sendStatus(200)
    } else res.sendStatus(500)

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

}
module.exports = {
  setUsuarios,
  setCasos,
  setAbogado,
  setConsulta,
  // setPersona,
  setAdmin,
  eliminarImagen,
  subirImagen
};
