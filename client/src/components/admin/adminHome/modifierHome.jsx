import React, { useEffect, useState } from "react"
import About from "./about"
import Items from "./items"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getAbout, getItems, postItem } from "../../../redux/actions/index"
import { toast } from "react-toastify"

export default function ModifierHome() {
    const { about, items } = useSelector(state => state)
    const [flag, setFlag] = useState(false)
    const [descripcion, setDescripcion] = useState("")
    const dispatch = useDispatch()


    function handleDelete(e) {
        console.log(e.target.name)
        e.preventDefault()
        dispatch(deleteItem({ item: e.target.name }))
        dispatch(getItems())
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (descripcion !== "") {
            dispatch(postItem({ descripcion }))
            dispatch(getItems())
            toast.success("item creado")
        } else toast.error("debe ingresar un texto")
    }
    useEffect(() => {
        dispatch(getAbout())

    }, [])
    useEffect(() => {
        dispatch(getItems())

    }, [getItems, deleteItem])

    return (
        <div className="w-100 d-flex justify-content-center h-50">
            <div className="d-flex justify-content-center flex-column w-50" >
                <About about={about} />
                <ul className="list-group mt-3">
                    {
                        items.map((e) => {
                            return (<Items item={e} handleDelete={handleDelete} />);
                        })
                    }
                </ul>
                {flag ?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <textarea placeholder="Deberia confiar en nosotros porque....." value={descripcion} onChange={e => setDescripcion(e.target.value)}></textarea>
                            <input type="submit" />
                        </form>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-primary" onClick={e => setFlag(!flag)}>Terminar</button>
                        </div>
                    </div> :
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" onClick={e => setFlag(!flag)}>Crear nuevo item</button>
                    </div>

                }
            </div>

        </div>
    )
}