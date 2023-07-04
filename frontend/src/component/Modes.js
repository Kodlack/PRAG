import axios from "axios";
import { useState } from "react";
import Themes from "./Themes";
import { Link } from "react-router-dom";

export default function Modes(props) {
  const [mode, setMode] = useState("");
  const [niveau, setNiveau] = useState(0);
  const [bool, setBool] = useState(false);

  return (
    <div>
      {!bool ? (
        <div>
          <div>
            <p>mode interro</p>
            {["Facile", "Moyen", "Difficile"].map((i, index) => (
              <button
                name="interrogation"
                value={index}
                onClick={(e) => {
                  setNiveau(e.target.value);
                  setMode(e.target.name);
                }}
              >
                {i}
              </button>
            ))}
          </div>
          <div>
            <p>mode entrainement</p>
            {["Facile", "Moyen", "Difficile"].map((i, index) => (
              <button
                name="entrainement"
                value={index}
                onClick={(e) => {
                  setNiveau(e.target.value);
                  setMode(e.target.name);
                }}
              >
                {i}
              </button>
            ))}
          </div>
          <br />
          <button
            onClick={() => {
              setBool(true);
            }}
          >
            Etape suivante
          </button>
        </div>
      ) : (
        ""
      )}
      {bool ? <Themes mode={mode} niveau={niveau} /> : ""}
      <br />
      <br />
    </div>
  );
}
