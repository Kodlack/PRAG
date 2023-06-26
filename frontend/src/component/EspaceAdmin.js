import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "7px",
          display: "inline-block",
        }}
      >
        ajout catégorie
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "7px",
          display: "inline-block",
        }}
      >
        ajout exo
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default EspaceAdmin;
