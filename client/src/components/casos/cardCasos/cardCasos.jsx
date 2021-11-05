import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putCaso } from "../../../redux/actions";


export default function CardCasos({ detalle, estado, juez, juzgado, numeroExpediente, numeroLiquidacion, medidaCautelar, trabaAfectiva, vtoMedidaCautelar, vtoTrabaAfectiva, jurisdiccion, flag }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        detalle: detalle,
        estado: estado,
        juez: juez,
        juzgado: juzgado,
        numeroExpediente: numeroExpediente,
        numeroLiquidacion: numeroLiquidacion,
        medidaCautelar: medidaCautelar,
        trabaAfectiva: trabaAfectiva,
        vtoMedidaCautelar: vtoMedidaCautelar,
        vtoTrabaAfectiva: vtoTrabaAfectiva,
        jurisdiccion: jurisdiccion,

    })
    const handleSubmit = function (e) {
        e.preventDefault()
        dispatch(putCaso(input))

    }
    console.log(input)
    return (
        flag ?
            <div className="container">
                <div className="accordion accordion-flush ancho" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={'a' + numeroLiquidacion}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#e' + numeroLiquidacion} aria-expanded="false" aria-controls={'e' + numeroLiquidacion}>
                                <b>N° Liquidacion: {numeroLiquidacion}</b>
                            </button>
                        </h2>
                        <div id={'e' + numeroLiquidacion} className="accordion-collapse collapse" aria-labelledby={'a' + numeroLiquidacion} data-bs-parent="#accordionFlushExample">
                            <form className="list-group" onSubmit={handleSubmit}>
                                <li>Juez:<input className="list-group-item w-25" value={input.juez} onChange={e => setInput({ ...input, juez: e.target.value })} /></li>
                                {estado === "inicio" ?
                                    <li>Estado:<br />
                                        <select defaultValue={input.estado} className="custom-select custom-select-lg mb-3 w-25" onChange={e => setInput({ ...input, estado: e.target.value })}>
                                            <option value={"inicio"} selected>inicio</option>
                                            <option value={"prueba"}>prueba</option>
                                            <option value={"sentencia"}>sentencia</option>
                                            <option value={"cerrado"}>cerrado</option>
                                        </select>
                                    </li> : estado === "prueba" ?
                                        <li>Estado:<br />
                                            <select defaultValue={input.estado} className="custom-select custom-select-lg mb-3 w-25" onChange={e => setInput({ ...input, estado: e.target.value })}>
                                                <option value={"inicio"}>inicio</option>
                                                <option value={"prueba"} selected>prueba</option>
                                                <option value={"sentencia"}>sentencia</option>
                                                <option value={"cerrado"}>cerrado</option>
                                            </select>
                                        </li> : estado === "sentencia" ? <li>Estado:<br />
                                            <select defaultValue={input.estado} className="custom-select custom-select-lg mb-3 w-25 " onChange={e => setInput({ ...input, estado: e.target.value })}>
                                                <option value={"inicio"}>inicio</option>
                                                <option value={"prueba"}>prueba</option>
                                                <option value={"sentencia"} selected>sentencia</option>
                                                <option value={"cerrado"}>cerrado</option>
                                            </select>
                                        </li> : <li>Estado:<br />
                                            <select defaultValue={input.estado} className="custom-select custom-select-lg mb-3 w-25" onChange={e => setInput({ ...input, estado: e.target.value })}>
                                                <option value={"inicio"}>inicio</option>
                                                <option value={"prueba"}>prueba</option>
                                                <option value={"sentencia"}>sentencia</option>
                                                <option value={"cerrado"} selected>cerrado</option>
                                            </select>
                                        </li>
                                }
                                <li>Juzgado:<input className="list-group-item w-25" value={input.juzgado} onChange={e => setInput({ ...input, juzgado: e.target.value })} /></li>
                                Detalles:<input className="list-group-item w-100 w-25" value={input.detalle} onChange={e => setInput({ ...input, detalle: e.target.value })} />
                                <li>N° Expediente:<input className="list-group-item w-25" value={input.numeroExpediente} onChange={e => setInput({ ...input, numeroExpediente: e.target.value })} /></li>
                                <li>N° Liquidacion:<input className="list-group-item w-25" value={input.numeroLiquidacion} disabled onChange={e => setInput({ ...input, numeroLiquidacion: e.target.value })} /></li>
                                <li>Medida Cautelar:<input className="list-group-item w-25" value={input.medidaCautelar ? "si" : "no"} onChange={e => setInput({ ...input, medidaCautelar: e.target.value })} /></li>
                                <li>Vencimiento Medida Cautelar:<input className="list-group-item w-25" value={input.vtoMedidaCautelar} onChange={e => setInput({ ...input, vtoMedidaCautelar: e.target.value })} /></li>
                                <li>Traba Afectiva:<input className="list-group-item w-25" value={input.trabaAfectiva ? "si" : "no"} onChange={e => setInput({ ...input, trabaAfectiva: e.target.value })} /></li>
                                <li>Vencimiento Traba Afectiva:<input placeholder="2000-12-30" className="list-group-item w-25" value={input.vtoTrabaAfectiva} onChange={e => setInput({ ...input, vtoTrabaAfectiva: e.target.value })} /></li>
                                <li>jurisdiccion:<input className="list-group-item w-25" value={input.jurisdiccion} onChange={e => setInput({ ...input, jurisdiccion: e.target.value })} /></li>
                                <li>Detalles:<input className="list-group-item w-25" value={input.detalle} onChange={e => setInput({ ...input, detalle: e.target.value })} /></li>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-primary d-flex justify-content-center mt-3 mb-3" type="submit">guardar</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="container">
                <div className="accordion accordion-flush ancho" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={'a' + numeroLiquidacion}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#e' + numeroLiquidacion} aria-expanded="false" aria-controls={'e' + numeroLiquidacion}>
                                <b>N° Liquidacion: {numeroLiquidacion}</b>
                            </button>
                        </h2>
                        <div id={'e' + numeroLiquidacion} className="accordion-collapse collapse" aria-labelledby={'a' + numeroLiquidacion} data-bs-parent="#accordionFlushExample">
                            <ul className="list-group">
                                <li className="list-group-item">Juez: {juez}</li>
                                <li className="list-group-item">Estado: {estado}</li>
                                <li className="list-group-item">Juzgado: {juzgado}</li>
                                <li className="list-group-item">Detalles: {detalle}</li>
                                <li className="list-group-item">N° Expediente: {numeroExpediente}</li>
                                <li className="list-group-item">N° Liquidacion: {numeroLiquidacion}</li>
                                <li className="list-group-item">Medida Cautelar: {medidaCautelar ? "si, hasta : " : "no"}{vtoMedidaCautelar ? vtoMedidaCautelar.slice(0, 10) : ""}</li>
                                <li className="list-group-item">Traba Afectiva: {trabaAfectiva ? "si, hasta : " : "no"}{vtoTrabaAfectiva ? vtoTrabaAfectiva : ""}</li>
                                <li className="list-group-item">jurisdiccion: {jurisdiccion ? jurisdiccion : "ninguna"}</li>
                                <li className="list-group-item">Detalles: {detalle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>)
}