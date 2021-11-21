/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./HomeAbogado.css";
import { putAbogado } from "../../redux/actions";
import Footer from "./Footer/Footer";
import NavAbogado from "./NavAbogado/NavAbogado";

export default function HomeAbogado() {
  const { usuario, abogado } = useSelector((state) => state);
  const dispatch = useDispatch()
  const { clientes } = abogado
  useEffect(() => {
    dispatch(putAbogado({ eMail: usuario.eMail }));
  }, [dispatch, usuario.eMail])

  return !usuario.abogadoId ? (
    <Redirect to="/" />
  ) : (
    <div >
      <NavAbogado />
    <div>
      <div className="jumbotron  jumbotron-fluid body-home">
        <h1 className="display-4">¡Bienvenido!</h1>
        <p className="lead ">
          En este sitio podrás encontrar todo lo necesario para poder gestionar
          tus casos, consultas y clientes, Para poder navegar puedes utilizar
          los botones que se encuentran en la navegación de la parte superior.
          Ahora te daremos una pequeña descripción de lo que hace cada botón:
        </p>
        <hr className="my-4"></hr>
        <p>
          HOME: este botón te lleva a la página de la cual iniciaste sesión. En
          esta página vas a poder ver cómo te ven el perfil las personas
          interesadas o tus clientes.
        </p>
        <p className="lead">
          <a
            role="button"
          >
          <Link to="/user/abogado" 
            className="button-home btn-lg" >
            Home
          </Link>
          </a>
        </p>
        <hr className="my-4"></hr>
        <p className="">
          Detalles: a través de esta ventana vas a poder ver, ingresar o
          modificar datos a tu perfil. Te recomendamos tenerlo actualizado.
        </p>
        <p className="lead">

          <a role="button">
            <Link to="/user/abogado/modificar-perfil"
              className="button-home btn-lg btn-m">
              Detalles
            </Link>
          </a>

        </p>
        <hr className="my-4"></hr>
        <p>
          Casos: a través de esta ventana vas a poder ingresar los datos de los
          nuevos casos e ir gestionando su estado.
        </p>

        <p className="lead">
          <a role="button">
            <Link to="/user/abogado/casos"
              className="button-home btn-lg">
              Casos
            </Link>
          </a>
        </p>
        <hr className="my-4"></hr>
        <p>
          Consultas: Por aquí vas a encontrar las nuevas consultas que recibe el
          estudio de diferentes personas, además vas a poder asignarte las
          consultas y tener contacto con los posibles clientes o clientes del
          estudio.
        </p>
        <p className="lead">
          <a role="button" >
          <Link to="/user/abogado/consultas"
            className="button-home btn-lg">
            Consultas
          </Link>
          </a>
        </p>
        <hr className="my-4"></hr>
        <p>
          Clientes: Por aquí vas a poder ver la relación con tus clientes, los
          casos activos de cada uno como también los que ya han finalizado.
        </p>
        <p className="lead">
          <a
            role="button"
          >
          <Link to="/user/abogado/clientes"
            className="button-home btn-lg">
            Clientes
            </Link>
          </a>
        </p>
      </div>
    </div>
          <Footer />
        </div>
  );
}
