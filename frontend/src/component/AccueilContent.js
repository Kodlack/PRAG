import React from "react";
import "../css/AccueilContent.css";
import olivier from "../photo/motif-olivier.png";
import academie from "../photo/motif-academie.png";

const AccueilContent = () => {
  return (
    <div className="content-accueil">
      <div className="content-decouvrir">
        <img src={olivier} alt="olivier" />
        <h1>Laissez nous vous accompagner</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          printing and typesetting printing and typesetting printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
        <a href="/decouverte">
          <button className="round-button">Je veux me faire accompagner</button>
        </a>
      </div>
      <hr className="solid"></hr>
      <div className="content-choisir">
        <img src={academie} alt="olivier" />
        <h1>Choisissez vos notions</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          printing and typesetting printing and typesetting printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
        <a href="/notions">
          <button className="round-button">
            Choisir les notions que je souhaites étudier
          </button>
        </a>
      </div>
    </div>
  );
};

export default AccueilContent;
