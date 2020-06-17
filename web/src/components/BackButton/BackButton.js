import React from "react";
import { useHistory } from "react-router-dom";

import "./Button.css";

export const BackButton = () => {
  const history = useHistory();

  const handleBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <button
      className="back__button button-styled"
      onClick={(e) => handleBack(e)}
    >
      Voltar
    </button>
  );
};

export default BackButton;
