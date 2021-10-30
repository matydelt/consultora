import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import Logo  from '../home-page/assets/img/buffet-buffet-law.png'
import { getUsuario } from "../../redux/actions";

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
            setDisplayName(e.user.displayName)
            console.log("Datos google",e.user);
        })
        .catch( error =>{
            console.log(error);
        })
    }
    // let nameUser = null;

    const logout = ()=>{
        signOut(auth).then(() => {
            setEmail('');
            setPassword('');
            dispatch( getUsuario( { } ) );
            setDisplayName(null)
          }).catch((error) => {
            // An error happened.
          });
    }

    const Login = async () =>{
        await signInWithEmailAndPassword(auth, eMail, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch( getUsuario( { eMail: eMail } ) );
            console.log("user",user);
                // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        setTimeout(setDisplayName(usuario?.firstName + " " + usuario?.lastName),200);
        
    }
    return(
        <div>
            {
                displayname ? 
                (
                    <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>WELCOME</h2>
                        </div>
                        <div className="card-header">
                            <h3>{(`${usuario.firstName} ${usuario.lastName}`)}</h3>
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
                                <input type="text" name="Mail" value={eMail} required placeholder="Ejemplo@ejemplo.com" className="form-control" autoFocus onChange={
                                    (e)=>{
                                        console.log("setEmail",e.target.value);
                                        setEmail(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" value={password} required placeholder="Password" className="form-control" onChange={
                                    (e)=>{
                                        console.log("setPassword",e.target.value);
                                        setPassword(e.target.value)}}/>
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