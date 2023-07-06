import React from 'react';
import '../css/ResumeContent.css';
import CardResumeExo from "../component/CardResumeExo";

const ResumeContent = () => {

  return (
    <div className="resume-content">
        <h2>Résumé de vos exercices</h2>
        <CardResumeExo />
        <CardResumeExo />
    </div>
  );
};

export default ResumeContent;
