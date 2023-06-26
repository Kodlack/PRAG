import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function EspaceAdmin() {
  return (
    <div>
      Espace admin
      <br />
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          backgroundColor: "#F8F5F2",
          margin: "20px",
          borderRadius: "7px",
          display: "inline-block",
        }}
      >
        Ajout catégorie
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Nom catégorie"
          sx={{ backgroundColor: "white", width: "200px", margin: "0px 50px" }}
        />
        <br />
        <br />
        <Button variant="contained">Valider</Button>
      </Box>
      <Box
        sx={{
          width: "300px",
          height: "250px",
          bgcolor: "background.paper",
          backgroundColor: "#F8F5F2",
          margin: "20px",
          borderRadius: "7px",
          display: "inline-block",
        }}
      >
        Ajout exo
        <br />
        <br />
        <FormControl
          fullWidth
          sx={{ backgroundColor: "white", width: "200px", margin: "0px 50px" }}
        >
          <InputLabel>Catégorie</InputLabel>
          <Select label="Catégorie">
            <MenuItem value={"grammaire"}>Grammaire</MenuItem>
            <MenuItem value={"anglisisme"}>Anglisisme</MenuItem>
            <MenuItem value={"conjugaison"}>Conjugaison</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl
          fullWidth
          sx={{ backgroundColor: "white", width: "200px", margin: "0px 50px" }}
        >
          <InputLabel>Type d'exercice</InputLabel>
          <Select label="typeExo">
            <MenuItem value={"qcm"}>QCM</MenuItem>
            <MenuItem value={"texteTrou"}>Texte à trous</MenuItem>
            <MenuItem value={"quesrep"}>Substitution</MenuItem>
            <MenuItem value={"ef"}>Ennocé fautif</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <Button variant="contained">Valider</Button>
      </Box>
    </div>
  );
}

export default EspaceAdmin;
