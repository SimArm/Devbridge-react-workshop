import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./Back.scss";

const Back = () => {
  return (
    <Link className="back" to="/">
      <FontAwesomeIcon className="back-icon" icon={faArrowLeft} />
      back
    </Link>
  );
};

export default Back;
