import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getPersonas,
  getUsuarios,
  postUsuario,
} from "../../redux/actions/index.js";
import { correoNoOK, createNOOK, createOK, dniNoOK } from "./alert.js";
import { Link } from "react-router-dom";
import md5 from 'md5'
import Navbar from "../home-page/Navbar/Navbar.jsx";

import './sign.css';


export const Signup = () => {
  const { usuarios, personas } = useSelector((state) => state);

  const dispatch = useDispatch();

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

  const GoTo = async () => {
    if (usuarios.some(e => e.eMail.toString() === eMail.toString()) || personas.some(e => e.dni.toString() === dni.toString())) {
      usuarios.some(e => e.eMail.toString() === eMail.toString()) ? correoNoOK() : dniNoOK()
    }
    else {
      await createUserWithEmailAndPassword(auth, eMail, md5(password))
        .then(() => {
          console.log("no rompio");
          dispatch(postUsuario({ eMail: eMail, firstName: firstName, dni: dni, lastName: lastName, celular: celular, password: md5(password) }))

          createOK()

        })
        .catch((error) => {
          console.log("que paso?");
          createNOOK()
          console.log(error);
        })
      setFirstName('');
      setLastName('');
      setPhone('');
      setDni('');
      setEmail('');
      setPassword('');
    }
  }
  return (
    <>
      <div className="container p-4">
        <Navbar></Navbar>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div className="card text-center">
              <div className="card-header">
                <h3>Registro</h3>
              </div>
              <div className="card-body form-sign">
                <div className="form-group">
                  <input type="type" value={firstName} name="firstName" autoComplete="off" placeholder="Nombre" className="form-control" autoFocus required onChange={(e) => { setFirstName(e.target.value) }} />
                </div>
                <div className="form-group">
                  <input type="type" value={lastName} name="lastName" autoComplete="off" placeholder="Apellido" className="form-control" required onChange={(e) => { setLastName(e.target.value) }} />
                </div>
                <div className="form-group">
                  <input type="text" value={dni} name="DNI" autoComplete="off" placeholder="DNI : 1234567" className="form-control" required onChange={(e) => { setDni(e.target.value) }} />
                </div>
                <div className="form-group">
                  <input type="text" value={celular} name="Number" autoComplete="off" placeholder="Teléfono : 11 1111-1111" className="form-control" required onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="form-group">
                  <input type="text" value={eMail} name="Mail" autoComplete="off" placeholder="Email : Ejemplo@ejemplo.com" className="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                  <input type="password" value={password} name="password" autoComplete="off" placeholder="Contraseña" className="form-control" required onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="form-group">
                  <button className="btn btn-success btn-block" onClick={GoTo} disabled={(firstName === '') || (lastName === '') || (dni === '') || (celular === '') || (eMail === '') || (password.length < 6)}>

                    Registrarme

                  </button>
                </div>

              </div>
              <div className="card-footer">
                <Link to="/ingreso">
                  <label className="pointer">
                    Ya tengo una cuenta. INGRESAR
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>)
}
export default Signup;
