import React from "react";
import { QuoteDiv } from "./Partials.style";

const Quote = () => {
  return (
    <QuoteDiv>
      <p>
        <span>“</span>
        To Follow Your Passion is good, but to FOLLOW THE TREND is wise,
        especially when your passion does not solve your problem or change your
        status.
        <span>”</span>
      </p>
      <div className="author-div">
        <p className="author">
          <span>-</span> Emmanuel A. Kadiri
        </p>
      </div>
    </QuoteDiv>
  );
};

export default Quote;
