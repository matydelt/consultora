import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { postUsuario } from '../../redux/actions/index.js'

export const Signup = () =>{
    
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ celular, setPhone ] = useState('');
    const [ dni, setDni ] = useState('');
    const [ eMail, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch();

    const auth = getAuth();

    const GoTo = async () =>{
        await createUserWithEmailAndPassword(auth, eMail, password);
        dispatch( postUsuario( { eMail, firstName, dni, lastName, celular, password } ) )
        setFirstName('');
        setLastName('');
        setPhone('');
        setDni('');
        setEmail('');
        setPassword('');
    }
    return(
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <form action="/signup" method="POST">
                                <div className="form-group">
                                    <input type="type" name="firstName" placeholder=" First Name" className="form-control" autoFocus required onChange={ (e)=>{setFirstName(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="type" name="lastName" placeholder=" Last Name" className="form-control" autoFocus required onChange={ (e)=>{setLastName(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="DNI" placeholder="DNI : 1234567" className="form-control" required onChange={ (e)=>{setDni(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="Number" placeholder="Number : 11 1111-1111" className="form-control" required onChange={ (e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="Mail" placeholder="Mail : Ejemplo@ejemplo.com" className="form-control" required onChange={ (e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" placeholder="Password min 6 digits" className="form-control" required onChange={ (e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block" onClick={GoTo} to={"/signin"} disabled={ (firstName==='')||(lastName==='')||(dni==='')||(celular==='')||(eMail==='')||(password.length<6)}>
                                    <Link to={"/signin"}>
                                    Register
                                    </Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;