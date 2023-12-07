import { useState, useEffect } from "react";
import axios from "axios";

export default function Backoffice() {
  const [advertList, setAdvertList] = useState([]);

  const [state, setState] = useState("");
  const [picture, setPicture] = useState("");
  const [content, setContent] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");

  const getAdvertList = () => {
    axios.get("http://localhost:6001/advert").then((response) => {
      setAdvertList(response.data);
    });
  };

  const postAdvert = () => {
    axios
      .post(`http://localhost:6001/advert`, {
        state,
        picture,
        content,
        city,
        county,
      })
      .then((response) => {
        console.info(response);
      });
    getAdvertList();
  };

  const deleteAdvert = (id) => {
    axios.delete(`http://localhost:6001/advert/${id}`).then((response) => {
      console.info(response);
    });
    getAdvertList();
  };

  useEffect(() => {
    getAdvertList();
  }, []);

  // eslint-disable-next-line no-restricted-syntax
  console.log(advertList);

  return (
    <div className="backoffice_content">
      <h1>Backoffice</h1>
      <p>Gestion des annonces</p>

      <form onSubmit={postAdvert}>
        <label htmlFor="state">TROC ou DON ?</label>
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <label htmlFor="picture">Photo de la plante</label>
        <input
          type="text"
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
        />
        <label htmlFor="content">Contenu de l'annonce</label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label htmlFor="city">Dans quelle ville est la plante ?</label>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <label htmlFor="county">Dans quel département est la plante ?</label>
        <input
          type="text"
          value={county}
          onChange={(event) => setCounty(event.target.value)}
        />
        <input type="submit" value="Ajouter" />
      </form>

      <ul>
        {advertList.map((advert) => (
          <li key={advert.id}>
            <p>
              {advert.id} - {advert.state}
            </p>
            <button type="button" onClick={() => deleteAdvert(advert.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
