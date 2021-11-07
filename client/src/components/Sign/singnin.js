import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  signInWithRedirect,
} from "firebase/auth";
import Logo from "../home-page/assets/img/buffet-buffet-law.png";
import {
  getUsuario,
  postUsuario,
  getPersonas,
  getUsuarios,
} from "../../redux/actions";
import {
  sessionERR,
  sessionIN,
  sessionOUT,
  createOK,
  correoNoOK,
  dniNoOK,
} from "./alert";
import { Link } from "react-router-dom";
import md5 from "md5";
import Navbar from "../home-page/Navbar/Navbar";
import { Redirect } from "react-router";

import "./sign.css";

export const Signin = () => {
  const { usuarios, personas, usuario } = useSelector((state) => state);

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
  const [displayname, setDisplayName] = useState(null);

  const auth = getAuth();
  const google = new GoogleAuthProvider();
  const loginGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        await signInWithPopup(auth, google)
          .then((e) => {
            setDisplayName(e.user.displayName);
            const aux = e.user.email;
            if (usuarios.some((e) => e.eMail == aux)) {
              dispatch(getUsuario({ eMail: e.user.email }));
            } else {
              setEmail(aux);
              setFirstName(e.user.displayName.split(" ")[0]);
              setLastName(e.user.displayName.split(" ")[1]);
              setPassword(md5(aux));
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

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

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setEmail("");
        setPassword("");
        dispatch(getUsuario({}));
        setDisplayName(null);
        sessionOUT();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const Login = async () => {
    await setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        await signInWithEmailAndPassword(auth, eMail, md5(password))
          .then((userCredential) => {
            // Signed in
            console.log("login");
            const user = userCredential.user;
            dispatch(getUsuario({ eMail: eMail }));
            sessionIN();
            setEmail("");
            setPassword("");
            // ...
          })
          .catch((error) => {
            console.log("error");
            sessionERR();
            const errorCode = error.code;
            const errorMessage = error.message;
            setEmail("");
            setPassword("");
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return usuario?.adminId ? (
    <Redirect to="/admin" />
  ) : usuario?.abogadoId ? (
    <Redirect to="/user/abogado" />
  ) : (
    <div>
      <Navbar />
      {!!usuario.firstName ? (
        <div className="container p-1">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card text-center">
                <div className="card-header">
                  <h2>Bienvenido</h2>
                </div>
                <div className="card-header">
                  <h3>
                    {displayname
                      ? displayname
                      : `${usuario.firstName} ${usuario.lastName}`}
                  </h3>
                </div>
                <img
                  src={Logo}
                  alt="Logo Consultora"
                  className="card-img-top mx-auto m-2 rounded-circle w-50"
                />
                <div className="card-body">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : displayname ? (
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 mx-auto mx-auto">
              <div className="card text-center">
                <div className="card-header">
                  <h3>Register</h3>
                </div>
                <div className="card-body form-sign">
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
                      autoFocus
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
                      disabled="on"
                      autoComplete="off"
                      placeholder="Mail : Ejemplo@ejemplo.com"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value={password}
                      disabled="on"
                      name="password"
                      autoComplete="off"
                      placeholder="Password min 6 digits"
                      className="form-control"
                      required
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
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 mx-auto mx-auto">
              <div className="card text-center">
                <div className="card-header">
                  <h3>Iniciar Sesión</h3>
                </div>
                <img
                  src={Logo}
                  alt="Logo Consultora"
                  className="card-img-top mx-auto m-2 rounded-circle w-50"
                />
                <div className="card-body form-sign">
                  <div className="form-group">
                    <input
                      type="text"
                      value={eMail}
                      name="Mail"
                      autoComplete="off"
                      required
                      placeholder="Ejemplo@ejemplo.com"
                      className="form-control"
                      autoFocus
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
                      required
                      placeholder="Password"
                      className="form-control"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button className="btn btn-primary btn-block" onClick={Login}>
                    Ingresar
                  </button>

                  <p>-- O ingresar con --</p>

                  {/* <button className="btn btn-primary btn-block" onClick={loginGoogle}>
                                                            Google
                                                        </button> */}
                  <div className="row">
                    <div className="col-md-12" onClick={loginGoogle}>
                      {" "}
                      <a class="btn btn-block btn-outline-primary" href="#">
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                        Google
                      </a>{" "}
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <Link to="/signup">
                    <label className="pointer p-1">
                      Crear una cuenta nueva
                    </label>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Signin;
