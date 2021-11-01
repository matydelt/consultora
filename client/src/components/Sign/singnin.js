import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Logo from '../home-page/assets/img/buffet-buffet-law.png'
import { getUsuario, postUsuario, getPersonas, getUsuarios } from "../../redux/actions";
import { sessionERR, sessionIN, sessionOUT, createOK, correoNoOK, dniNoOK } from "./alert";
import md5 from 'md5'


export const Signin = () => {

    const { usuarios, personas, usuario } = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersonas())
        dispatch(getUsuarios())
    }, [dispatch])

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [celular, setPhone] = useState('');
    const [dni, setDni] = useState('');
    const [eMail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayname, setDisplayName] = useState(null);

    const auth = getAuth();
    const google = new GoogleAuthProvider();
    const loginGoogle = () => {
        signInWithPopup(auth, google)
            .then(e => {
                setDisplayName(e.user.displayName)
                let aux = e.user.email
                if (usuarios.some(e => e.eMail === aux))
                    dispatch(getUsuario({ eMail: e.user.email }))
                else {
                    setEmail(e.user.email)
                    setFirstName(e.user.displayName)
                    setPassword(md5(e.user.email))
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const GoTo = async () => {
        if (usuarios.some(e => e.eMail == eMail) || personas.some(e => e.dni == dni)) {
            usuarios.some(e => e.eMail == eMail) ? correoNoOK() : dniNoOK()
        }
        else {
            dispatch(postUsuario({ eMail: eMail, firstName: firstName, dni: dni, lastName: lastName, celular: celular, password: md5(password) }))
            createOK()
            setFirstName('');
            setLastName('');
            setPhone('');
            setDni('');
            setEmail('');
            setPassword('');

        }
    }

    const logout = () => {
        signOut(auth).then(() => {
            setEmail('');
            setPassword('');
            dispatch(getUsuario({}));
            setDisplayName(null)
            sessionOUT()
        }).catch((error) => {
            // An error happened.
        });
    }

    const Login = async () => {
        await signInWithEmailAndPassword(auth, eMail, md5(password))
            .then((userCredential) => {
                // Signed in
                console.log("login");
                const user = userCredential.user;
                dispatch(getUsuario({ eMail: eMail }));
                sessionIN()
                setEmail('');
                setPassword('');
                // ...
            })
            .catch((error) => {
                console.log('error');
                sessionERR();
                const errorCode = error.code;
                const errorMessage = error.message;
                // setEmail('');
                // setPassword('');
            });

    }
    return (
        <div>
            {
                !!usuario.firstName ?
                    (
                        <div className="container p-4">
                            <div className="row">
                                <div className="col-md-4 mx-auto">
                                    <div className="card text-center">
                                        <div className="card-header">
                                            <h2>WELCOME</h2>
                                        </div>
                                        <div className="card-header">
                                            <h3>{displayname ? displayname : (`${usuario.firstName} ${usuario.lastName}`)}</h3>
                                        </div>
                                        <img src={Logo} alt="Logo Consultora" className="card-img-top mx-auto m-2 rounded-circle w-50" />
                                        <div className="card-body">
                                            <button className="btn btn-primary btn-block" onClick={logout}>
                                                Signout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        displayname ?
                            (
                                <div className="container p-4">
                                    <div className="row">
                                        <div className="col-md-4 mx-auto">
                                            <div className="card text-center">
                                                <div className="card-header">
                                                    <h3>Register</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <input type="type" value={firstName} name="firstName" autoComplete="off" placeholder=" First Name" className="form-control" autoFocus required onChange={(e) => { setFirstName(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="type" value={lastName} name="lastName" autoComplete="off" placeholder=" Last Name" className="form-control" autoFocus required onChange={(e) => { setLastName(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" value={dni} name="DNI" autoComplete="off" placeholder="DNI : 1234567" className="form-control" required onChange={(e) => { setDni(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" value={celular} name="Number" autoComplete="off" placeholder="Number : 11 1111-1111" className="form-control" required onChange={(e) => { setPhone(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" value={eMail} name="Mail" disabled='on' autoComplete="off" placeholder="Mail : Ejemplo@ejemplo.com" className="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" value={password} disabled='on' name="password" autoComplete="off" placeholder="Password min 6 digits" className="form-control" required onChange={(e) => { setPassword(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-success btn-block" onClick={GoTo} disabled={(firstName === '') || (lastName === '') || (dni === '') || (celular === '') || (eMail === '') || (password.length < 6)}>
                                                            Register
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="container p-4">
                                    <div className="row">
                                        <div className="col-md-4 mx-auto">
                                            <div className="card text-center">
                                                <div className="card-header">
                                                    <h3>Iniciar Sesión</h3>
                                                </div>
                                                <img src={Logo} alt="Logo Consultora" className="card-img-top mx-auto m-2 rounded-circle w-50" />
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <input type="text" value={eMail} name="Mail" autoComplete="off" required placeholder="Ejemplo@ejemplo.com" className="form-control" autoFocus onChange={
                                                            (e) => { setEmail(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" value={password} name="password" autoComplete="off" required placeholder="Password" className="form-control" onChange={
                                                            (e) => { setPassword(e.target.value) }} />
                                                    </div>
                                                    <button className="btn btn-primary btn-block" onClick={Login}>
                                                        Signin
                                                    </button>
                                                    <div className="form-group">
                                                        <h6>-- O ingresar con --</h6>
                                                    </div>
                                                    <button className="btn btn-primary btn-block" onClick={loginGoogle}>
                                                        Google
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    )
            }

        </div>
    )
}
export default Signin;