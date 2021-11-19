import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsuario, postUsuario } from "../../redux/actions";
import { createOK, correoNoOK, dniNoOK } from "./alert";
import md5 from "md5";
import LogoBlanco from "../home-page/assets/img/logo-blacno-sin-fondo.png";
import NavBarGeneral from "../NavBarGeneral/NavBarGeneral";
import ButtonsNav from "../ButtonsNav/ButtonsNav";

const RegistroGoogle = () => {
  const { usuarios, personas, usuario } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [celular, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const GoTo = async () => {
    if (
      usuarios.some((e) => e.eMail.toString() === eMail.toString()) ||
      personas.some((e) => e.dni.toString() === dni.toString())
    ) {
      usuarios.some((e) => e.eMail.toString() === eMail.toString())
        ? correoNoOK()
        : dniNoOK();
    } else {
      dispatch(
        postUsuario({
          eMail: eMail,
          firstName: firstName,
          dni: dni,
          lastName: lastName,
          celular: celular,
          password: md5(password),
        })
      )
        .then(() => {
          dispatch(getUsuario({ eMail: eMail }));
        })
        .catch((error) => {});
      createOK();
      setFirstName("");
      setLastName("");
      setPhone("");
      setDni("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <NavBarGeneral />
      <div className="body_displayname">
        <div className="bg_blue_image_displayname">
          <div className="overlay_displayname overlay_right_displayname">
            <div>
              <img src={LogoBlanco} alt="Logo" />
              <h4>
                ¿Tienes una cuenta? <br /> Presione "Iniciar Sesión".
              </h4>
              <ButtonsNav text="Iniciar Sesion" link="/ingreso" />
            </div>
          </div>
          <div className="form_container registerEmail_in_container">
            <div className="registerEmail">
              <h3>Registro</h3>
              <div className="singn_input_login">
                <input
                  type="type"
                  value={firstName}
                  name="firstName"
                  autoComplete="off"
                  placeholder=" Nombre"
                  className=""
                  autoFocus
                  required
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="singn_input_login">
                <input
                  type="type"
                  value={lastName}
                  name="lastName"
                  autoComplete="off"
                  placeholder=" Apellido"
                  className=""
                  autoFocus
                  required
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div className="singn_input_login">
                <input
                  type="text"
                  value={dni}
                  name="DNI"
                  autoComplete="off"
                  placeholder="DNI : 1234567"
                  className=""
                  required
                  onChange={(e) => {
                    setDni(e.target.value);
                  }}
                />
              </div>
              <div className="singn_input_login">
                <input
                  type="text"
                  value={celular}
                  name="Number"
                  autoComplete="off"
                  placeholder="Teléfono : 11 1111-1111"
                  className=""
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="singn_input_login">
                <input
                  type="text"
                  value={eMail}
                  name="Mail"
                  disabled="on"
                  autoComplete="off"
                  placeholder="Email: ejemplo@ejemplo.com"
                  className=""
                  required
                />
              </div>
              <div className="singn_input_login">
                <input
                  type="password"
                  value={password}
                  disabled="on"
                  name="password"
                  autoComplete="off"
                  placeholder="Contraseña"
                  className=""
                  required
                />
              </div>
              <div className="divButton_register_email">
                <button
                  className=""
                  onClick={GoTo}
                  disabled={
                    firstName === "" ||
                    lastName === "" ||
                    dni === "" ||
                    celular === "" ||
                    eMail === "" ||
                    password.length < 6
                  }
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroGoogle;
