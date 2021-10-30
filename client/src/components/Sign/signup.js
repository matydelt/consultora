import React, { useState } from "react";
import { useDispatch } from 'react-redux'
// import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { postUsuario } from '../../redux/actions/index.js';
import { createNoOK, createOK } from "./alert.js";
import md5 from 'md5'


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
        await createUserWithEmailAndPassword(auth, eMail, md5(password) )
        .then(() => {
            dispatch( postUsuario( { eMail:eMail, firstName:firstName, dni:dni, lastName:lastName, celular:celular, password:md5(password) } ))
            createOK()
        })
        .catch((error) => {
            createNoOK()
            console.log(error);
        })
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
                            {/* <form action="/signup" method="POST" > */}
                                <div className="form-group">
                                    <input type="type" value={firstName} name="firstName" autoComplete="off" placeholder=" First Name" className="form-control" autoFocus required onChange={ (e)=>{setFirstName(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="type" value={lastName} name="lastName" autoComplete="off" placeholder=" Last Name" className="form-control" autoFocus required onChange={ (e)=>{setLastName(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={dni} name="DNI" autoComplete="off" placeholder="DNI : 1234567" className="form-control" required onChange={ (e)=>{setDni(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={celular} name="Number" autoComplete="off" placeholder="Number : 11 1111-1111" className="form-control" required onChange={ (e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={eMail} name="Mail" autoComplete="off" placeholder="Mail : Ejemplo@ejemplo.com" className="form-control" required onChange={ (e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" value={password} name="password" autoComplete="off" placeholder="Password min 6 digits" className="form-control" required onChange={ (e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block" onClick={GoTo} disabled={ (firstName==='')||(lastName==='')||(dni==='')||(celular==='')||(eMail==='')||(password.length<6)}>
                                     
                                    Register
                                    
                                    </button>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;