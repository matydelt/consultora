import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DatePicker from "react-multi-date-picker";
import { useDispatch } from 'react-redux';
import { actionEliminarDia, getDia } from '../../../redux/actions';
import ModalVerTurnos from './modalVerTurnos/ModalVerTurnos';
import ModalModificarTurnos from './modalModificarTurnos.jsx/ModalModificarTurnos';
import swal from 'sweetalert';

const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

export default function TurnosAbogado() {

    const dispatch = useDispatch();

    const [turnoHoy, setTurnoHoy] = useState();
    const [dias, setDias] = useState([]);
    const [fechasSeleccionadas, setFechasSeleccionadas] = useState();
    const [cargandoDias, setCargandoDias] = useState(true);

    const { usuario, dia } = useSelector(state => state);

    const [form, setForm] = useState({
        fechas: [],
        nota: '',
        turnos: [
            { hora: '09:00' },
        ]
    });

    const { fechas, nota, turnos } = form;



    useEffect(() => {
        getDias();
    }, [usuario, dia, cargandoDias]);
    // }, []);


    useEffect(() => {
        let hoy = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
        const turnoHoy = dias?.find(dia => {
            return new Date(dia.fecha).toLocaleDateString() === hoy
        });
        setTurnoHoy(turnoHoy);
    }, [dias]);


    function getDias() {
        axios.get('/dias', { params: { abogadoId: usuario?.abogado?.id, abogadoFlag: true } }).then(({ data }) => {
            setDias(data);
        }).then(() => {
            setCargandoDias(false);
        });
    }

    function seleccionarFechas(e) {
        setFechasSeleccionadas(fechasSeleccionadas);
        let fechasFormateadas = e.map(fecha => {
            return fecha.toDate();
        });
        setForm({ ...form, fechas: fechasFormateadas })
    };

    function handleForm(e) {
        if (e.target.className.includes('clase-turno')) {
            let copiaTurnos = [...turnos];
            copiaTurnos[Number(e.target.dataset.id)].hora = e.target.value;
            setForm({ ...form }, copiaTurnos);
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }

    }


    function submitForm(e) {
        e.preventDefault();

        axios.post('/dia', { form, abogadoId: usuario.abogado.id }).then(resp => {
            setCargandoDias(true);
            getDias();
            toast.success('Día añadido')
        }).then(() => {
            setCargandoDias(false);
        }).catch(err => toast.error('No se pudo crear los turnos'));

    };

    function añadirTurno() {
        turnos.push({ hora: '' })
        setForm({ ...form }, turnos);
    };

    function quitarTurno(i) {
        turnos.splice(i, 1)
        setForm({ ...form }, turnos)
    };



    // CAMBIAR
    function verTurnos(diaId) {
        dispatch(getDia(diaId));
    };

    function verTurnosHoy() {
        dispatch(getDia(turnoHoy?.id));
    };

    function modificarDia(diaId) {
        dispatch(getDia(diaId));
    };


    function eliminarDia(diaId) {
        swal({
            title: "Eliminar",
            text: "Si elimina el día con todos sus turnos, los clientes serán notificados por email que su turno fue cancelado, ¿Eliminar?",
            icon: "warning",
            buttons: true,
        }
        ).then((willDelete) => {
            if (willDelete) {
                setCargandoDias(true);
                dispatch(actionEliminarDia(diaId))
                getDias();
                toast.success('El día fue eliminado');
            }
        }).catch(err => toast.error('Ocurrió un problema al eliminar el día y sus turnos'));
        
        setCargandoDias(false);
    };



    return (<>

        <ModalVerTurnos />

        <ModalModificarTurnos getDias={getDias} />

        <div class="modal fade" id="modalTurnos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={(e) => submitForm(e)}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar turnos</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            {/* { diaModificar?.dia?.id?.length === 0 &&
                                } */}
                            <div className="row">
                                <div className="col align-middle text-end">
                                    <label for="fecha" className="col-form-label pointer">Seleccionar fechas:
                                        <span className="col-1 mx-2">📅</span>

                                    </label>

                                    <DatePicker id="fecha" value={fechasSeleccionadas} format="DD/MM" name="fechas" multiple={true} onChange={(e) => seleccionarFechas(e)} className="pointer" />

                                </div>
                            </div>

                            <label className="form-label mt-2">Notas: </label>
                            <textarea type="text" name="nota" value={nota} className="form-control" onChange={(e) => handleForm(e)} placeholder="La nota se guardará en todos los días seleccionados" />

                            <hr />

                            <div className="text-end">
                                <button type="button" className="btn btn-xs btn-primary" onClick={añadirTurno}>+ Nuevo turno</button>
                            </div>

                            {
                                turnos?.map((turno, i) => {
                                    return <div className="row my-3">
                                        <div className="col">
                                            <label className="col-form-label"> Turno {i + 1} </label>
                                        </div>
                                        <div className="col-auto">
                                            <input className="form-control pointer clase-turno" type="time" min="09:00" max="18:00" data-id={i} value={turnos[i].hora} onChange={handleForm}></input>
                                        </div>
                                        <div className="col-auto align-middle text-center p-0">
                                            <span className="badge rounded-pill bg-light border shadow text-danger pointer fs-3 px-2 py-0 " onClick={() => quitarTurno(i)}> - </span>
                                        </div>
                                    </div>
                                })

                            }

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" class="btn btn-primary" >Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


        <div className="container mt-3 bg-light p-4 shadow">

            <h1>Turnos</h1>
            <hr></hr>

            <div>
                <button type="button" class="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#modalTurnos">
                    Agregar turnos
                </button>
                <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#modalVerTurnos" onClick={verTurnosHoy} disabled={!turnoHoy}>
                    Ver turnos de hoy
                </button>
            </div>


            {
                cargandoDias ?
                    <div className="container text-center mt-5">

                        <div class="spinner-grow text-muted" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow mx-3  text-muted" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow  text-muted" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    : !cargandoDias && dias.length > 0 ?


                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th className="w-25">Fecha</th>
                                    <th className="w-25">Cantidad</th>
                                    <th className="w-25">Notas</th>
                                    <th className="text-center w-25">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dias?.map(dia => {
                                    return (<>
                                        <tr>
                                            <td className="text-capitalize">{new Date(dia.fecha).toLocaleDateString('es-ES', options)}</td>
                                            <td>{dia.turnos?.length}</td>
                                            <td>{dia.nota}</td>
                                            <td className="text-center">
                                                <button className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modalVerTurnos" onClick={() => verTurnos(dia.id)}>
                                                    Ver turnos
                                                </button>
                                                <button onClick={() => modificarDia(dia.id)} type="button" class="btn btn-outline-primary btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#modalModificarTurnos">
                                                    Modificar
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => eliminarDia(dia.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    </>)
                                })
                                }
                            </tbody>
                        </table>

                        :
                        // (dias.length === 0) &&
                        (!cargandoDias && dias.length === 0) &&

                        <div className="container my-5 text-center">
                            <h5>No hay turnos para mostrar</h5>
                        </div>

            }


        </div>
    </>)
};