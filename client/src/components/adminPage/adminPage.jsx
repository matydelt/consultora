/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import React, { useEffect } from "react";
import { getUsuarios, setAbogado, setAdmin } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Navbar from "../home-page/Navbar/Navbar";

export default function AdminPage() {
    const dispatch = useDispatch()
    const { usuario } = useSelector(state => state)
    const allUsers = useSelector(state => state.usuarios)
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    useEffect(() => {
        dispatch(getUsuarios())
    }, [dispatch])


    const hadleChange = (e, type) => {
        e.preventDefault();
        if (type === "abogado") {
            let mensaje = ""
            let type = ""
            let user = { eMail: e.target.value, flag: e.target.checked }
            dispatch(setAbogado(user))
            if (user.flag) {
                mensaje = "Abogado asignado"
                type = 'success'
            }
            else {
                mensaje = "Abogado eliminado"
                type = 'danger'
            }
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            alertPlaceholder.append(wrapper)
        } else if (type === "admin") {
            let mensaje = ""
            let type = ""
            let user = { eMail: e.target.value, flag: e.target.checked }
            dispatch(setAdmin(user))
            if (user.flag) {
                mensaje = "admin  asignado"
                type = 'success'
            }
            else {
                mensaje = "admin eliminado"
                type = 'danger'
            }
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            alertPlaceholder.append(wrapper)
        }
    }
    console.log(usuario)



    return (
        !usuario.adminId ? <Redirect to="/" /> :
            <div>
                <Navbar />
                <div className="ms-5 me-5 mt-3 mb-3">

                    <table className="table table-striped  ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Admin</th>
                                <th scope="col">Abogado</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Dni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers?.map((e, i) => {
                                let type = ""
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i}</th>
                                        {e.adminId ? usuario.adminId !== 1 || e.adminId === 1 ?
                                            <td >
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} defaultChecked disabled />
                                            </td> :
                                            <td >
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} defaultChecked />
                                            </td> :
                                            <td >
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "admin") }} />
                                            </td>
                                        }
                                        {e.abogadoId ? usuario.eMail !== e.eMail && e.adminId !== 1 ?
                                            <td >
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} defaultChecked />
                                            </td> :
                                            <td >
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} defaultChecked disabled />
                                            </td> :
                                            <td >
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={e.eMail} onInput={(e) => { hadleChange(e, type = "abogado") }} />
                                            </td>
                                        }
                                        <td>{e.eMail}</td>
                                        <td>{e.personaDni} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div id="liveAlertPlaceholder"></div>
                </div>
            </div>
    )

}