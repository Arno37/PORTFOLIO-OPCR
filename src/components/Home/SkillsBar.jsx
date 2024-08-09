import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled, isTechnical }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      {!isTechnical && ( // Afficher la barre de progression uniquement si ce n'est pas une compétence technique
        <ProgressBar
          className={!isScrolled ? "progress" : "progress-bar-animation"}
          now={value}
        />
      )}
    </div>
  );
}

export default SkillsBar;
