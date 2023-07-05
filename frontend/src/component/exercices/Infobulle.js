import React from "react";
import { Modal } from "@mui/material";
import { Container } from "@mui/system";
import pose7 from "../../photo/Pose7.png";
import "../../css/richelieu.css";

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
      <img src={pose7} alt="pose7" id="richelieu7"></img>
      <button
        class="button2"
        style={{ backgroundColor: "#FBE62F" }}
        onClick={handleOpen}
      >
        Me rappeler la règle
      </button>
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
          {props.lienExo != undefined ? (
            <p
              dangerouslySetInnerHTML={{ __html: props.value + props.lienExo }}
            ></p>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: props.value }}></p>
          )}
        </Container>
      </Modal>
    </div>
  );
}
