import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
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

    // let mesActual = useRef(new Date().getMonth());

    const [mesActual, setMesActual] = useState(new Date().getMonth());
    const [turnoHoy, setTurnoHoy] = useState();
    const [dias, setDias] = useState([]);
    const [fechasSeleccionadas, setFechasSeleccionadas] = useState();
    const [cargandoDias, setCargandoDias] = useState(true);
    const [desde, setDesde] = useState(1);
    const [cantidadDias, setCantidadDias] = useState(0);
    const [element, setElement] = useState(null);

    const { usuario } = useSelector(state => state);

    const [form, setForm] = useState({
        fechas: [],
        nota: '',
        turnos: [
            { hora: '09:00' },
        ]
    });

    const { fechas, nota, turnos } = form;


    const observer = useRef(
        new IntersectionObserver(
            async entries => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setDesde(state => state + 1)
                }
            },
            {
                threshold: 1
            }
        )
    );


    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);



    useEffect(() => {
        // getDias();
        getDias(mesActual);
        // }, [usuario, dia, cargandoDias]);
    }, [usuario]);


    useEffect(() => {
        let hoy = new Date().getDate() + '/' + (mesActual + 1) + '/' + new Date().getFullYear()
        const turnoHoy = dias?.find(dia => {
            return new Date(dia.fecha).toLocaleDateString() === hoy
        });
        setTurnoHoy(turnoHoy);
    }, [dias]);

    useEffect(() => {
        if (dias.length < cantidadDias-desde) {
            getDias(undefined, desde)
            console.log(desde);
            console.log(dias.length, cantidadDias);
        }
    }, [desde]);


    function getDias(periodoFiltrar, desde) {
        if (usuario?.abogado?.id) {
            axios.get('/dias', { params: { abogadoId: usuario?.abogado?.id, abogadoFlag: true, periodoFiltrar, desde } }).then(({ data }) => {
                if (!periodoFiltrar && desde) {
                    setCantidadDias(data.count)
                    setDias(state => [...state, ...data.rows]);
                    console.log('DESDE');
                } else {
                    setDias([])
                    setDias(data);
                    console.log('SIN DESDE');
                    console.log(dias);
                }
            }).then(() => {
                setCargandoDias(false);
            });
        }
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
            setDias([])
            getDias(undefined, desde);
            setMesActual('');
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


    function eliminarDia(dia) {
        swal({
            title: "Eliminar",
            text: "Al eliminar el día con todos sus turnos, se notificará vía email a los clientes cuyos turnos fueron cancelados, ¿Eliminar?",
            icon: "warning",
            buttons: true,
        }
        ).then((willDelete) => {
            if (willDelete) {
                setCargandoDias(true);
                dispatch(actionEliminarDia(dia.id));

                setTimeout(() => {
                    getDias(new Date(dia.fecha).getMonth());
                }, 1000);

                toast.success('El día fue eliminado');
            }
        }).catch(err => toast.error('Ocurrió un problema al eliminar el día y sus turnos'));

        setCargandoDias(false);
    };


    function filtrarPorMes(e) {
        // setDesde(0)
        console.log(desde);
        if (e.target.value) {
            setCantidadDias(0)
            // setDesde(1);
            getDias(e.target.value);
        } else {
            setDias([]);
            setDesde(1);
            getDias(undefined, desde);
        }
    };

    function cargarMasTurnos() {
        setDesde(desde + 1);

        console.log(desde);
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

                                    <DatePicker required id="fecha" value={fechasSeleccionadas} format="DD/MM" name="fechas" multiple={true} onChange={(e) => seleccionarFechas(e)} className="pointer" />

                                </div>
                            </div>

                            <label className="form-label mt-2">Notas: </label>
                            <textarea type="text" name="nota" value={nota} className="form-control" onChange={(e) => handleForm(e)} placeholder="La nota se guardará en todos los días seleccionados" />

                            <hr />

                            <div className="text-end">
                                <button type="button" className="btn btn-xs btn-primaryNuestro" onClick={añadirTurno}>+ Nuevo turno</button>
                            </div>

                            {
                                turnos?.map((turno, i) => {
                                    return <div className="row my-3">
                                        <div className="col">
                                            <label className="col-form-label"> Turno {i + 1} </label>
                                        </div>
                                        <div className="col-auto">
                                            <input required className="form-control pointer clase-turno" type="time" min="09:00" max="18:00" data-id={i} value={turnos[i].hora} onChange={handleForm}></input>
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
                            <button type="submit" class="btn btn-primaryNuestro" >Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


        <div className="container mt-3 bg-light p-4 shadow">

            <h1>Turnos</h1>
            <hr></hr>

            <div className="row align-middle my-3">
                <div className="col my-1">
                    <button type="button" class="btn btn-primaryNuestro" data-bs-toggle="modal" data-bs-target="#modalTurnos">
                        Agregar turnos
                    </button>
                    <button type="button" class="btn btn-primaryNuestro mx-2" data-bs-toggle="modal" data-bs-target="#modalVerTurnos" onClick={verTurnosHoy} disabled={!turnoHoy}>
                        Ver turnos de hoy
                    </button>
                </div>

                <div className="col-auto text-right align-middle ">
                    <select className="form-control pointer shadow p-2" onChange={(e) => filtrarPorMes(e)}>
                        <option selected={!mesActual} value="">Ver todos los turnos</option>
                        <option selected={mesActual === 0} value="0">Enero</option>
                        <option selected={mesActual === 1} value="1">Febrero</option>
                        <option selected={mesActual === 2} value="2">Marzo</option>
                        <option selected={mesActual === 3} value="3">Abril</option>
                        <option selected={mesActual === 4} value="4">Mayo</option>
                        <option selected={mesActual === 5} value="5">Junio</option>
                        <option selected={mesActual === 6} value="6">Julio</option>
                        <option selected={mesActual === 7} value="7">Agosto</option>
                        <option selected={mesActual === 8} value="8">Septiembre</option>
                        <option selected={mesActual === 9} value="9">Octubre</option>
                        <option selected={mesActual === 10} value="10">Noviembre</option>
                        <option selected={mesActual === 11} value="11">Diciembre</option>
                    </select>
                </div>
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
                                        <tr className="animate__animated animate__fadeIn">
                                            <td className="text-capitalize">{new Date(dia.fecha).toLocaleDateString('es-ES', options)}</td>
                                            <td>{dia.turnos?.length}</td>
                                            <td>{dia.nota}</td>
                                            <td className="text-center">
                                                <button className="btn btn-secondaryNuestro btn-sm" data-bs-toggle="modal" data-bs-target="#modalVerTurnos" onClick={() => verTurnos(dia.id)}>
                                                    Ver turnos
                                                </button>
                                                <button onClick={() => modificarDia(dia.id)} type="button" class="btn btn-primaryNuestro btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#modalModificarTurnos">
                                                    Modificar
                                                </button>
                                                <button className="btn btn-dangerNuestro btn-sm" onClick={() => eliminarDia(dia)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    </>)
                                })
                                }
                            </tbody>



                        </table>

                        :

                        (!cargandoDias && dias.length === 0) &&

                        <div className="container my-5 text-center">
                            <h5>No hay turnos para mostrar</h5>
                        </div>
            }

            {cantidadDias > 0 &&
                <button
                    ref={setElement}
                    className="shadow border fs-4"
                    disabled={dias.length >= cantidadDias-desde}
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100px",
                        marginBottom: "10px",
                        display: "block",
                        // background: "transparent",
                    }}
                > Cargar más... </button>
            }
        </div>
    </>)
};