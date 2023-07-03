import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "../../css/admin.css";
import axios from "axios";
import { useState } from "react";

export default function AjoutCategorie() {
  const [categorie, setCategorie] = useState("");

  const ajoutDataCatego = async () => {
    const date = await axios
      .post("http://localhost:3000/admin/cate", { subtheme: categorie })
      .then((res) => {
        console.log("data ajoutééé");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Box
        sx={{
          width: "350px",
          height: "200px",
          backgroundColor: "#F8F5F2",
          margin: "20px",
          borderRadius: "7px",
          display: "inline-block",
          boxShadow: "3px 3px 5px rgb(218, 223, 224)",
          textAlign: "center",
        }}
      >
        <p id="titre">Ajout catégorie</p>
        <TextField
          id="outlined-basic"
          label="Nom catégorie"
          sx={{ backgroundColor: "white", width: "290px" }}
          onChange={(e) => setCategorie(e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => ajoutDataCatego().catch(console.error)}
        >
          Valider
        </Button>
      </Box>
    </div>
  );
}
