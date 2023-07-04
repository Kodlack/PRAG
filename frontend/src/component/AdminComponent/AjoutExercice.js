import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import "../../css/admin.css";
import axios from "axios";
import { useState } from "react";

export default function AjoutExercice(props) {
  const [exercice, setExercice] = useState("");
  const [theme, setTheme] = useState("");
  const [categorie, setCategorie] = useState("");
  const [niveau, setNiveau] = useState(0);
  const [type, setType] = useState("");
  const [consigne, setConsigne] = useState("");
  const [explication, setExplication] = useState("");
  const [lienExo, setLienExo] = useState("");
  const [questions, setQuestions] = useState([]);

  const ajoutDataExo = async () => {
    const date = await axios
      .post("http://localhost:3000/admin/exo", {
        ide: 10,
        theme: theme,
        subtheme: "",
        level: 1,
        type: type,
        consigne: consigne,
        explication: explication,
        lienExo: lienExo,
        questions: questions,
      })
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
          width: "1000px",
          height: "700px",
          backgroundColor: "#F8F5F2",
          margin: "20px",
          borderRadius: "7px",
          display: "inline-block",
          boxShadow: "3px 3px 5px rgb(218, 223, 224)",
          textAlign: "center",
        }}
      >
        <p id="titre">Ajout exercice</p>
        <FormControl
          sx={{ backgroundColor: "white", width: "200px", margin: "10px 50px" }}
        >
          <InputLabel>Thème</InputLabel>
          <Select label="typeExo" onClick={(e) => setTheme(e.value)}>
            <MenuItem value={"syntaxe"}>Syntaxe</MenuItem>
            <MenuItem value={"morphologie"}>Morphologie</MenuItem>
            <MenuItem value={"lexique"}>Lexique</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl
          fullWidth
          sx={{ backgroundColor: "white", width: "500px", margin: "0px 50px" }}
        >
          <InputLabel>Catégorie</InputLabel>
          <Select
            label="Catégorie"
            onClick={(e) => setCategorie(e.target.value)}
          >
            {props.categorie.map((i, index) => (
              <MenuItem value={i.subtheme}>{i.subtheme}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl
          sx={{ backgroundColor: "white", width: "200px", margin: "0px 50px" }}
        >
          <InputLabel>Niveau de difficulté</InputLabel>
          <Select label="typeExo" onClick={(e) => setNiveau(e.target.value)}>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ backgroundColor: "white", width: "200px", margin: "0px 50px" }}
        >
          <InputLabel>Type d'exercice</InputLabel>
          <Select label="typeExo" onClick={(e) => setType(e.target.value)}>
            <MenuItem value={"qcm"}>QCM</MenuItem>
            <MenuItem value={"texteTrou"}>Texte à trous</MenuItem>
            <MenuItem value={"quesrep"}>Substitution</MenuItem>
            <MenuItem value={"ef"}>Ennocé fautif</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
          id="outlined-basic"
          label="Consigne"
          sx={{
            backgroundColor: "white",
            width: "700px",
            margin: "10px",
          }}
          onChange={(e) => setConsigne(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Explication"
          sx={{ backgroundColor: "white", width: "700px", margin: "10px" }}
          onChange={(e) => setExplication(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Lien éventuel vers une règle"
          sx={{ backgroundColor: "white", width: "450px", margin: "10px" }}
          onChange={(e) => setLienExo(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          onClick={() => ajoutDataExo().catch(console.error)}
        >
          Valider
        </Button>
        <br />
        <br />
        <Button variant="contained">Ajouter une question</Button> A développer
      </Box>
    </div>
  );
}
