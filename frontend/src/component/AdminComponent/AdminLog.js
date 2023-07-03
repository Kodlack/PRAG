import { Button, TextField } from "@mui/material";
import { useState } from "react";

function AdminLog() {
  const [id, setId] = useState("");
  const [mdp, setMdp] = useState("");

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Identifiant"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          label="Mot de passe"
          onChange={(e) => {
            setMdp(e.target.value);
          }}
        />
        <br />
        <Button
          onClick={(e) => {
            if (id === "admin" && mdp === "admin")
              window.location.replace("/admin");
          }}
        >
          Valider
        </Button>
      </form>
    </div>
  );
}

export default AdminLog;
