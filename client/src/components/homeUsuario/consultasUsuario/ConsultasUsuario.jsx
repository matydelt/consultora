import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getConsultas } from '../../../redux/actions';
import UsuarioNavBar from '../usuarioNavBar/UsuarioNavBar';

export default function ConsultasUsuario() {

    const dispatch = useDispatch();

    const { consultas, usuario } = useSelector((state) => state);


    useEffect(() => {
        dispatch(getConsultas());
    }, []);

    return (<>

        <UsuarioNavBar></UsuarioNavBar>

        <div className="container mt-5">


            <h1>Consultas realizadas</h1>
            <hr></hr>

            {console.log(usuario)}
            {console.log(consultas)}
            {/* {console.log(consultas && consultas[3].dni.toString() === usuario.dni.toString())} */}

            <table className="table mt-5 table-hover">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th className="w-50">Mensaje</th>

                        <th>Estado</th>
                        <th>Link de pago</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        consultas?.filter(c => c.dni?.toString() === usuario.dni?.toString()).map(consulta => {

                            return (<>

                                <tr className="align-middle">
                                    <td>
                                        <div className="text-muted">
                                            {new Date(consulta.createdAt).toLocaleTimeString()}
                                        </div>
                                        <div>
                                            {new Date(consulta.createdAt).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="w-50">{consulta.mensaje}</td>

                                    <td>
                                        {consulta.abogadoId ?
                                            <span className="badge bg-success">Aceptado</span>
                                            :
                                            <span className="badge bg-warning">En revisión</span>
                                        }
                                    </td>
                                    <td>Link de pago</td>
                                </tr>


                            </>)
                        })

                    }
                </tbody>
            </table>
        </div>
    </>)
}