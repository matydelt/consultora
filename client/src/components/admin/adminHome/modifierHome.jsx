/* eslint-disable react-hooks/exhaustive-deps */
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
    const [actualsItems, setActualsItems] = useState([])


    async function handleDelete(e) {
        e.preventDefault()
        await dispatch(deleteItem({ item: e.target.name }))
        await dispatch(getItems())
        setActualsItems([...items])
        toast.success(e.target.name)

    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (descripcion !== "") {
            await dispatch(postItem({ descripcion }))
            dispatch(getItems())
            toast.success("item creado")
        } else toast.error("debe ingresar un texto")
    }
    useEffect(() => {
        dispatch(getAbout())
    }, [dispatch])
    useEffect(async () => {
        dispatch(getItems())

    }, [dispatch])
    useEffect(() => {
        setActualsItems([...items])
    }, [items])
    console.log(actualsItems)
    return (
        <div className="w-100 d-flex justify-content-center h-50">
            <div className="d-flex justify-content-center flex-column w-50" >
                <About about={about} />
                <ul className="list-group mt-3">
                    {
                        actualsItems.map((e) => {
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