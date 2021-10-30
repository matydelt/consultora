import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Logo  from '../home-page/assets/img/buffet-buffet-law.png'
import { getUsuario } from "../../redux/actions";
import { sessionERR, sessionIN, sessionOUT } from "./alert";
import md5 from 'md5'


export const Signin = () =>{
    
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ celular, setPhone ] = useState('');
    const [ dni, setDni ] = useState('');
    const [ eMail, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ displayname, setDisplayName ] = useState(null);

    const dispatch = useDispatch();
    
    const { usuario } = useSelector( state => state )

    const auth = getAuth();
    const google = new GoogleAuthProvider();
    const loginGoogle = ()=>{
        signInWithPopup(auth, google)
        .then( e =>{
            console.log("Datos google",e.user.displayName)
            setDisplayName(e.user.displayName)
            console.log("Datos google",e.user.displayName)
        })
        .catch( error =>{
            console.log(error);
        })
    }

console.log();

    const logout = ()=>{
        signOut(auth).then(() => {
            setEmail('');
            setPassword('');
            dispatch( getUsuario( { } ) );
            setDisplayName(null)
            sessionOUT()
          }).catch((error) => {
            // An error happened.
          });
    }

    const Login = async () =>{
        await signInWithEmailAndPassword(auth, eMail, md5(password))
        .then((userCredential) => {
            // Signed in
            console.log("login");
            const user = userCredential.user;
            dispatch( getUsuario( { eMail: eMail } ) );
            sessionIN()
            setEmail('');
            setPassword('');
                // ...
        })
        .catch((error) => {
            console.log("error");
            sessionERR();
            const errorCode = error.code;
            const errorMessage = error.message;
            setEmail('');
            setPassword('');
        });
        
    }
    return(
        <div>
            {
                displayname || !!usuario.firstName ? 
                (
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h2>WELCOME</h2>
                                    </div>
                                    <div className="card-header">
                                        <h3>{displayname?displayname:(`${usuario.firstName} ${usuario.lastName}`)}</h3>
                                    </div>
                                    <img src={Logo} alt="Logo Consultora" className="card-img-top mx-auto m-2 rounded-circle w-50"/>
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
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-4 mx-auto">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h3>Iniciar Sesión</h3>
                                    </div>
                                    <img src={Logo} alt="Logo Consultora" className="card-img-top mx-auto m-2 rounded-circle w-50"/>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <input type="text" value={eMail} name="Mail" autoComplete="off" required placeholder="Ejemplo@ejemplo.com" className="form-control" autoFocus onChange={
                                                (e)=>{ setEmail(e.target.value) }}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={password} name="password" autoComplete="off" required placeholder="Password" className="form-control" onChange={
                                                (e)=>{ setPassword(e.target.value)}}/>
                                        </div>
                                        <button className="btn btn-primary btn-block" onClick={Login}>
                                            Signin
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