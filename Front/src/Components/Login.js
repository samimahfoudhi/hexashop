import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Features/useSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // nouvel état pour gérer le message d'erreur

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .post("http://localhost:7000/login", { email, password })
      .then((response) => {
        console.log(response.data.user);
        if (response.data.message === "Login successful") {
          dispatch(
            setUser({
              data: {
                email: email,
                role: response.data.user.role,
                id: response.data.user.id,
              },
              log: true,
            })
          );
          navigate("/products");
        } else {
          setErrorMessage("Email ou mot de passe incorrect"); // Définition du message d'erreur
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Une erreur s'est produite. Veuillez réessayer."); // Gestion des erreurs de requête
      });
  };
  const user = useSelector((state) => state.user.data);
  const etat = useSelector((state) => state.user.log);
  console.log(user);
  console.log(etat);

  return (
    <form id="subscribe" action="" method="get">
      <div className="row">
        <div className="col-lg-5">
          <fieldset>
            <input
              name="name"
              type="email"
              id="name"
              placeholder="Your Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="col-lg-5">
          <fieldset>
            <input
              name="email"
              type="password"
              id="email"
              pattern="[^ @]*@[^ @]*"
              placeholder="Your Password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="col-lg-2">
          <fieldset>
            <button
              type="submit"
              id="form-submit"
              className="main-dark-button"
              onClick={handleLogin}
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </fieldset>
        </div>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
      {/* Affichage du message d'erreur s'il existe */}
    </form>
  );
};

export default Login;
