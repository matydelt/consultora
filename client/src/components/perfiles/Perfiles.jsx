import axios from "axios";
import { useEffect, useState } from "react"
import CardAbogado from "../cardAbogado/CardAbogado"

export default function Perfiles() {

    const [abogados, setAbogados] = useState([]);


    useEffect(() => {
        getAbogados().then(({ data }) => {
            setAbogados(data);
        })
    }, []);

    const getAbogados = async (id) => {
        return await axios.get(`http://localhost:3000/abogados`)
    };

    return (<>



        <div className="container mt-5">

            <div className="row row-cols-2 row-cols-lg-4 row-cols-xl-5 row-cols-md-2 g-5 animate__animated animate__fadeIn animate__faster">
                {abogados.map((a, i) => {
                    return (<CardAbogado key={i} abogado={a}></CardAbogado>)
                })
                }

            </div>

        </div>
    </>)

}