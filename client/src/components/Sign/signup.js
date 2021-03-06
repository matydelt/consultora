import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getPersonas,
  getUsuarios,
  postUsuario,
} from "../../redux/actions/index.js";
import { correoNoOK, createNOOK, createOK, dniNoOK } from "./alert.js";
import md5 from "md5";
import "./sign.css";
import { useHistory } from "react-router";

export const Signup = () => {
  const { usuarios, personas } = useSelector((state) => state);

  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getPersonas());
    dispatch(getUsuarios());
  }, [dispatch]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [celular, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  async function GoTo() {
    if (
      usuarios.some((e) => e.eMail.toString() === eMail.toString()) ||
      personas.some((e) => e.dni.toString() === dni.toString())
    ) {
      usuarios.some((e) => e.eMail.toString() === eMail.toString())
        ? correoNoOK()
        : dniNoOK();
    } else {
      await createUserWithEmailAndPassword(auth, eMail, password)
        .then(() => {
          console.log("no rompio");
          dispatch(
            postUsuario({
              eMail: eMail,
              firstName: firstName,
              dni: dni,
              lastName: lastName,
              celular: celular,
              password: md5(password),
            })
          );
          history.push("/ingreso");
          createOK();
        })
        .catch((error) => {
          console.log("que paso?");
          createNOOK();
          console.log(error);
        });
      setFirstName("");
      setLastName("");
      setPhone("");
      setDni("");
      setEmail("");
      setPassword("");
    }
  }
  return (
    <>
      <div className="form_container sign_up_container">
        <div className="div_sign_up_container">
          <h3>Creaci??n de Cuenta</h3>
          <div className="singn_input_login">
            <input
              type="type"
              value={firstName}
              name="firstName"
              autoComplete="off"
              placeholder="Nombre"
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
              placeholder="Apellido"
              className=""
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
              placeholder="Tel??fono : 11 1111-1111"
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
              autoComplete="off"
              placeholder="Email : Ejemplo@ejemplo.com"
              className=""
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="singn_input_login">
            <input
              type="password"
              value={password}
              name="password"
              autoComplete="off"
              placeholder="Contrase??a"
              className=""
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="button_registro">
            <button
              className="button_login_singup"
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
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
