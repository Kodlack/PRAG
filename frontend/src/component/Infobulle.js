import React from "react";
import { Button, Modal } from "@mui/material";
import { Container } from "@mui/system";

export default function Infobulle(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Me rappeler la règle
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Container
          sx={{ background: "#FFF6C5", margin: "50px", borderRadius: "6px" }}
        >
          <h3>Explication de la régle</h3>
          <p dangerouslySetInnerHTML={{ __html: props.value }}></p>
        </Container>
      </Modal>
    </div>
  );
}
