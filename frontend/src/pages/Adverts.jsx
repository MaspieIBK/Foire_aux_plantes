import { useState, useEffect } from "react";
import axios from "axios";
import AdvertCard from "../components/AdvertCards";

export default function Advert() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6001/advert/`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="advert_list">
      {data.map((advert) => (
        <AdvertCard key={advert.id} details={advert} />
      ))}
    </div>
  );
}
