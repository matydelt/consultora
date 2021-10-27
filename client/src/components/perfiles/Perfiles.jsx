import Card from "../card/Card"


export default function Perfiles() {

    return (<>

        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
            </div>
        </nav>

        
        <div className="container mt-5">

            <div className="row row-cols-2 row-cols-lg-4 row-cols-xl-5 row-cols-md-2 g-5 animate__animated animate__fadeIn animate__faster">
                {Array.from(Array(20).keys()).map( (c, i) => {
                    return (<Card key={i} id={i}></Card>)


                })
                }

            </div>



        </div>
    </>)

}