import React, { useEffect, useState } from "react"
import About from "./about"
import Items from "./items"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getAbout, getItems, postItem } from "../../../redux/actions/index"
import { toast } from "react-toastify"

export default function ModifierHome() {
    const { about } = useSelector(state => state)
    const [items] = useState([{ descripcion: "hola", id: 1 }, { descripcion: "chau", id: 2 }])
    const [flag, setFlag] = useState(false)
    const [descripcion, setDescripcion] = useState("")
    const dispatch = useDispatch()


    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteItem())
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (descripcion !== "") {

            // dispatch(postItem(descripcion))
            toast.success("item creado")
        } else toast.error("debe ingresar un texto")
    }

    return (
        <div className="w-100 d-flex justify-content-center h-50">
            <div className="d-flex justify-content-center flex-column w-50" >
                <About about={about} />
                <ul className="list-group mt-3">
                    {
                        items.map((e) => {
                            return (<Items item={e} erase={handleDelete} />);
                        })
                    }
                </ul>
                {flag ?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <textarea placeholder="Deberia confiar en nosotros porque....." value={descripcion} onChange={e => setDescripcion(e.target.value)}></textarea>
                            <input type="submit" />
                        </form>
                    </div> :
                    <div>

                    </div>

                }
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary" onClick={e => setFlag(!flag)}>Crear nuevo item</button>
                </div>
            </div>

        </div>
    )
}