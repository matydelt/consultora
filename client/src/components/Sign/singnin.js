import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Logo from '../home-page/assets/img/buffet-buffet-law.png'
import { getUsuario } from "../../redux/actions";

export const Signin = () => {
    const dispatch = useDispatch()

    const [eMail, setEmail] = useState(null);
    const [password, setPassword] = useState('');
    const [displayname, setDisplayName] = useState(null);
    const auth = getAuth();
    const google = new GoogleAuthProvider();
    const loginGoogle = () => {
        signInWithPopup(auth, google)
            .then(e => {
                setDisplayName(e.user.displayName)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const logout = () => {
        signOut(auth).then(() => {
            setEmail(null);
            setDisplayName(null)
        }).catch((error) => {
            console.log(error)
        });
    }

    const Login = async () => {
        await signInWithEmailAndPassword(auth, eMail, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        dispatch(getUsuario(eMail))
        setPassword('');
    }
    return (
        <div>
            {
                displayname || eMail ?
                    (
                        <div className="container p-4">
                            <div className="row">
                                <div className="col-md-4 mx-auto">
                                    <div className="card text-center">
                                        <div className="card-header">
                                            <h2>WELCOME</h2>
                                        </div>
                                        <div className="card-header">
                                            <h3>{displayname ? displayname : eMail}</h3>
                                        </div>
                                        <img src={Logo} alt="Logo Consultora" className="card-img-top mx-auto m-2 rounded-circle w-50" />
                                        <div className="card-body">
                                            <button className="btn btn-primary btn-block" onClick={logout}>
                                                Singout
                                            </button>
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
                                                <input type="text" name="Mail" placeholder="Ejemplo@ejemplo.com" className="form-control" autoFocus onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <button className="btn btn-primary btn-block" onClick={Login}>
                                                Singin
                                            </button>
                                            <div className="form-group">
                                                <h6>-- O ingresar con Google --</h6>
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
            }

        </div>
    )
}
export default Signin;