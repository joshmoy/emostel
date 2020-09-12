import React from "react";
import { Icondiv2 } from "./IconDiv.style";

const IconDiv2 = ({ icon, text }) => {
  return (
    <Icondiv2>
      <div>
        <img src={icon} alt={icon} />
      </div>
      <p>{text}</p>
    </Icondiv2>
  );
};

export default IconDiv2;
