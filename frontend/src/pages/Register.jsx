import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [status, setStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleChangePseudo = (event) => {
    setPseudo(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeCheckedPassword = (event) => {
    setCheckedPassword(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();

    if (password === checkedPassword) {
      axios
        .post("http://localhost:6001/user", {
          pseudo,
          email,
          password,
        })
        .then((response) => {
          setStatus({
            success: true,
            error: false,
            message: response.data.Message,
          });
        })
        .catch((err) => {
          setStatus({
            success: false,
            error: true,
            message: err.response.data.error || err.response.data.Erreur,
          });
        });
    }
  };
  return (
    <>
      <h1>Page d'inscription</h1>
      <form className="register_form" onSubmit={sendRegisterData}>
        <p>Pseudo</p>
        <input type="text" onChange={handleChangePseudo} />
        <p>Email</p>
        <input type="email" onChange={handleChangeEmail} />
        <p>Password</p>
        <input type="password" onChange={handleChangePassword} />
        <p>Vérifier le password</p>
        <input type="password" onChange={handleChangeCheckedPassword} />
        <input type="submit" value="S'enregistrer" />
      </form>
      {status.error ? <p>{status.message}</p> : ""}
      {status.success ? <p>{status.message}</p> : ""}
    </>
  );
}
