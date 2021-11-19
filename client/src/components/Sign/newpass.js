import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getUsuarios } from "../../redux/actions/index.js";
import { correoNo, linkOK } from "./alert.js";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import LogoBlanco from "../home-page/assets/img/logo-blacno-sin-fondo.png";
import "./sign.css";
import NavBarGeneral from "../NavBarGeneral/NavBarGeneral.jsx";
import ButtonsNav from "../ButtonsNav/ButtonsNav.jsx";

export const NewPass = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsuarios());
  }, [dispatch]);

  const { usuarios } = useSelector((state) => state);

  const [eMail, setEmail] = useState("");
  const [CAPTCHA, setCAPTCHA] = useState(false);

  const auth = getAuth();

  const Cambiopass = async () => {
    // cambio.preventDefault();

    if (
      CAPTCHA &&
      usuarios.some((e) => e.eMail.toString() === eMail.toString())
    ) {
      //
      await sendPasswordResetEmail(auth, eMail).then(
        () => {
          linkOK();
          setTimeout(history.push("/ingreso"), 5000);
        },
        function (error) {
          correoNo();
        }
      );
    } else {
      correoNo();
    }
  };
  return (
    <>
      <NavBarGeneral />
      <div className="body_displayname">
        <div className="bg_blue_image_displayname">
          <div className="overlay_displayname overlay_right_displayname">
            <div>
              <img src={LogoBlanco} alt="Logo" />
              <h4>
                Si ya tienes una cuenta presiona en <br />
                "YA TENGO UNA CUENTA"
              </h4>
              <ButtonsNav text="Ya tengo una cuenta" link="/ingreso" />
            </div>
          </div>
          <div className="form_container newPass_in_container">
            <div className="newPass">
              <div className="">
                <h3>Introduce tu correo</h3>
              </div>
              <form onSubmit={Cambiopass}>
                <div className="singn_input_login">
                  <input
                    type="text"
                    value={eMail}
                    name="Mail"
                    autoComplete="off"
                    placeholder="Email : Ejemplo@ejemplo.com"
                    className=""
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA}
                    onChange={() => {
                      setCAPTCHA(true);
                    }}
                  />
                </div>

                <div className="newPass_button">
                  <button
                    // onClick={(e)=>Cambiopass(e)}
                    disabled={eMail === ""}
                  >
                    Cambiar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewPass;
