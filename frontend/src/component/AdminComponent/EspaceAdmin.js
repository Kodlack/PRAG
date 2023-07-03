import axios from "axios";
import { useEffect, useState } from "react";
import "../../css/admin.css";
import AjoutCategorie from "./AjoutCategorie";
import AjoutExercice from "./AjoutExercice";

function EspaceAdmin() {
  const [categorie, setCategorie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const date = await axios
        .get("http://localhost:3000/categorie")
        .then((res) => {
          setCategorie(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <p id="titre">Espace admin</p>
      <br />
      <AjoutCategorie />
      <hr />
      <AjoutExercice categorie={categorie} />
    </div>
  );
}

export default EspaceAdmin;
