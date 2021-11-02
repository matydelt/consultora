/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { getUsuarios, setAbogado } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function AdminPage() {
    const dispatch = useDispatch()
    const adm = useSelector(state => state.adm)
    const allUsers = useSelector(state => state.usuarios)
    let arrBolean = []
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    useEffect(() => {
        dispatch(getUsuarios())
    }, [])



    const hadleChange = (e, i) => {
        e.preventDefault();
        let mensaje = ""
        let type = ""
        let user = { eMail: e.target.value, flag: arrBolean[i] }
        dispatch(setAbogado(user))
        if (arrBolean[i]) {
            mensaje = "Abogado asignado"
            type = 'success'
        }
        else {
            mensaje = "Abogado eliminado"
            type = 'danger'
        }
        arrBolean[i] = !arrBolean[i]
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div className="alert alert-' + type + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        alertPlaceholder.append(wrapper)
    }




    return (
        // !adm ? <Redirect to="/" /> :
        <div className="ms-5 me-5 mt-3 mb-3">

            <table className="table table-striped  ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Abogado</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Dni</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map((e, i) => {
                        if (e.abogadoId) {
                            arrBolean.push(false)  // bandera avisa a la api de que ya tiene stado de abogado y debe eliminarlo
                            return (
                                <tr key={i}>
                                    <th scope="row">{i}</th>
                                    <td >
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => hadleChange(e, i)} defaultChecked />
                                    </td>
                                    <td>{e.eMail}</td>
                                    <td>{e.personaDni} </td>
                                </tr>
                            )
                        }
                        else {
                            arrBolean.push(true)
                            return (
                                <tr key={i}>
                                    <th scope="row">{i}</th>
                                    <td className="">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => hadleChange(e, i)} />
                                    </td>
                                    <td>{e.eMail} </td>
                                    <td>{e.personaDni} </td>

                                </tr>
                            )
                        }
                    })}


                </tbody>
            </table>

            <div id="liveAlertPlaceholder"></div>
        </div>

    )

}