import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import NavAbogado from "./NavAbogado/NavAbogado";
import { useDispatch, useSelector } from "react-redux";
import { getAbogado } from "../../redux/actions";

export default function HomeAbogado() {

  const dispatch = useDispatch()
  const { usuario } = useSelector(state => state)
  useEffect(() => {

    dispatch(getAbogado({ "eMail": usuario.eMail }))
  }, [])
  return (
    <div>
      <NavAbogado />
      <div>
        What is Lorem Ipsum? <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <Footer />
    </div>
  );
}
