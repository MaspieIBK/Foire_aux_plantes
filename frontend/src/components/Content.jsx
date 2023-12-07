import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Adverts from "../pages/Adverts";
import Backoffice from "../pages/Backoffice";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function Content() {
  return (
    <section className="content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/advert" element={<Adverts />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </section>
  );
}
