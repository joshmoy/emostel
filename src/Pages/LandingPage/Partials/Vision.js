import React from "react";
import { Missiondiv } from "./Partials.style";

const Vision = () => {
  return (
    <Missiondiv>
      <h3>MISSION, VISION AND CORE VALUES</h3>
      <div className="grid-2">
        <div className="box-1">
          <h4>Mission Statement:</h4>
          <p>
            To provide technical solutions to pressing needs through training,
            connections and top quality sales and service delivery for personal,
            groups, organisational and national transformation and growth.
          </p>
        </div>
        <div className="box-2">
          <h4>Vision Statement:</h4>
          <p>
            To actively and passively develop, rebrand and deliver more than 100
            million productively engaged persons, positively impacting nations
            and millions of organisations, every 5 years.
          </p>
        </div>
      </div>
      <div className="box-3">
        <h4>Our Core Values:</h4>
        <ul className="grid-3">
          <li>Top-notch Expertise in considered fields</li>
          <li>Deep passion for development, growth and productivity</li>
          <li>Attention to details</li>
          <li>Great sense of creativity, trend and style</li>
          <li>Loaded, Skilled and Experienced facilitators</li>
          <li>Love of God and trust in Him who made us</li>
          <li>
            High quality, trained and motivated service delivery personnel
          </li>
          <li>
            Highly spirited and solution oriented as individuals and groups
          </li>
        </ul>
      </div>
    </Missiondiv>
  );
};

export default Vision;
