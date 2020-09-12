import React from "react";
import { Icondiv } from "./IconDiv.style";

const IconDiv = ({ icon, text }) => {
  return (
    <Icondiv>
      <span>
        <img src={icon} alt={icon} />
      </span>
      <p>{text}</p>
    </Icondiv>
  );
};

export default IconDiv;
