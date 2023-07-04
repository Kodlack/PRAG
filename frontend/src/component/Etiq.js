import React from "react";
import "../css/Etiq.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Themes from "./Themes";

const Etiq = () => {
  const [checked, setChecked] = React.useState([false, false, false]);

  const handleChange1 = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  return (
    <div>
      <div class="theme">
        <h1 class="titre">
          <FormControlLabel
            control={
              <Checkbox
                sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                checked={checked[0] && checked[1] && checked[2]}
                indeterminate={
                  (checked[0] || checked[1] || checked[2]) &&
                  !(checked[0] && checked[1] && checked[2])
                }
                onChange={handleChange1}
              />
            }
          />
          Orthographe
        </h1>
        <p class="contenu">
          <FormControlLabel
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
        </p>
        <p class="contenu">
          <FormControlLabel
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
          Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
        </p>
        <p class="contenu">
          <FormControlLabel
            control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
          />
          Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy
        </p>
      </div>
    </div>
  );
};

export default Etiq;
