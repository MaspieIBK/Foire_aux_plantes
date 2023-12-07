import { useState } from "react";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendCredentials = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:6001/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setStatus({
          success: true,
          error: false,
          message: "Connexion réussie",
        });
        console.info(response);
      })
      .catch((err) => {
        setStatus({
          success: false,
          error: true,
          message: "Erreur de connexion",
        });
        console.error(err);
      });
  };
  return (
    <>
      <h1>Espace connexion</h1>
      <form className="register_form" onSubmit={sendCredentials}>
        <p>Email</p>
        <input type="email" onChange={handleChangeEmail} />
        <p>Password</p>
        <input type="text" onChange={handleChangePassword} />
        <input type="submit" value="Se connecter" />
      </form>
      {status.error ? <p>{status.message}</p> : ""}
      {status.success ? <p>{status.message}</p> : ""}
    </>
  );
}
