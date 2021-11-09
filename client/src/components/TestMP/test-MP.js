import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import mercadopago from "mercadopago";
import { postTickets } from "../../redux/actions";

export function MedioDePago () {
    
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [unit, setUnitPrice] = useState('');

    const Ticket = () => {
        dispatch(postTickets({ title: title, unit_price: unit }))
    }

    return (
        <div className="container p-8">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                                <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="type" value={title} name="title" autoComplete="off" placeholder=" title" className="form-control" autoFocus required onChange={(e) => { setTitle(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <input type="type" value={unit} name="unit" autoComplete="off" placeholder=" Price" className="form-control" required onChange={(e) => { setUnitPrice(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-block" onClick={Ticket} disabled={(title === '') || (unit === '')}>

                                    Crear

                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MedioDePago;