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
import md5 from "md5";
import Navbar from "../home-page/Navbar/Navbar.jsx";

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
    if (
      usuarios.some((e) => e.eMail == eMail) ||
      personas.some((e) => e.dni == dni)
    ) {
      usuarios.some((e) => e.eMail == eMail) ? correoNoOK() : dniNoOK();
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
      );
      await createUserWithEmailAndPassword(auth, eMail, md5(password))
        .then(() => {
          createOK();
        })
        .catch((error) => {
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
  };
  return (
    <div>
      <Navbar navId={"menu"} />
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center">
              <div className="card-header">
                <h3>Register</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="type"
                    value={firstName}
                    name="firstName"
                    autoComplete="off"
                    placeholder=" First Name"
                    className="form-control"
                    autoFocus
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="type"
                    value={lastName}
                    name="lastName"
                    autoComplete="off"
                    placeholder=" Last Name"
                    className="form-control"
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={dni}
                    name="DNI"
                    autoComplete="off"
                    placeholder="DNI : 1234567"
                    className="form-control"
                    required
                    onChange={(e) => {
                      setDni(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={celular}
                    name="Number"
                    autoComplete="off"
                    placeholder="Number : 11 1111-1111"
                    className="form-control"
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={eMail}
                    name="Mail"
                    autoComplete="off"
                    placeholder="Mail : Ejemplo@ejemplo.com"
                    className="form-control"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    name="password"
                    autoComplete="off"
                    placeholder="Password min 6 digits"
                    className="form-control"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-success btn-block"
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
                    Register
                  </button>
                </div>
                <div className="form-group">
                  <h6>-- -- -- -- -- -- -- -- -- -- -- -- </h6>
                </div>
                <div className="form-group">
                  <Link to="/ingreso">
                    <label>Go to Login → → →</label>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
