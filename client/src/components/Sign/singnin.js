import React, { useState } from "react";
import 'firebase/auth';
import { useFirebaseApp } from "reactfire";
import Logo  from '../home-page/assets/img/buffet-buffet-law.png'

export const Signin = () =>{
    return(
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
                                <input type="text" name="Mail" placeholder="Ejemplo@ejemplo.com" className="form-control" autoFocus/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Password" className="form-control"/>
                            </div>
                            <button className="btn btn-primary btn-block">
                                Singin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;