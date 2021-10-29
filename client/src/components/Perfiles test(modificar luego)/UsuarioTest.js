import React from "react";
import Logo  from '../home-page/assets/img/buffet-buffet-law.png'

export const UsuarioTest = () =>{
    return(
        <div class="container p-4">
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card text-center">
                        <div class="card-header">
                            <h3>Iniciar Sesión</h3>
                        </div>
                        <img src={Logo} alt="Logo Consultora" class="card-img-top mx-auto m-2 rounded-circle w-50"/>
                        <div class="card-header">
                            <h3>Iniciar Sesión</h3>
                        </div>
                        <div class="card-body">
                            <button class="btn btn-primary btn-block">
                                Singout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SigninA;