import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";

const ResultContainer = ({ suggestedNames }) => {
  const suggestedNamesJxs = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });
  return <div className="results-container">{suggestedNamesJxs}</div>;
};

export default ResultContainer;
