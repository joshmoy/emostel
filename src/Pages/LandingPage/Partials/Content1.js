import React from "react";
import {} from "./Partials.style";
import Content from "../../../Components/Content/Content";
import IconDiv from "../../../Components/IconDiv/IconDiv";
import education from "../../../img/graduate.svg";
import speaking from "../../../img/speaking.svg";
import leader from "../../../img/leader.svg";
import creativity from "../../../img/think.svg";
import ict from "../../../img/radar.svg";
import knowledge from "../../../img/book.svg";
import people from "../../../img/people.svg";
import growth from "../../../img/growth.svg";
import entrepreneurship from "../../../img/marketing.svg";
import environment from "../../../img/sustainability.svg";
import home from "../../../img/browser.svg";
import catering from "../../../img/catering.svg";
import fashion from "../../../img/clothes.svg";
import IconDiv2 from "../../../Components/IconDiv/IconDiv2";

const Content1 = () => {
  return (
    <div>
      <Content
        title="WHAT WE DO"
        subtitle="We offer Training, Development, Coaching, Mentoring, Recruitments, Outsourcing, and also render Sales and Services, in the fields of:"
      >
        <IconDiv icon={education} text="Education" />
        <IconDiv icon={speaking} text="Public Speaking" />
        <IconDiv icon={leader} text="Leadership" />
        <IconDiv icon={creativity} text="Creations and Creativity" />
        <IconDiv
          icon={ict}
          text="Information and Communications Technology (ICT)"
        />
        <IconDiv
          icon={knowledge}
          text="Knowledge and Skills Acquisition and Enhancement"
        />
        <IconDiv
          icon={growth}
          text="Personal, Family and Group (Humanity) Development"
        />
        <IconDiv icon={people} text="Human Relations" />
        <IconDiv
          icon={entrepreneurship}
          text="Entrepreneurship and Business Management and Development"
        />
        <IconDiv icon={environment} text="Environmental Sciences" />
        <IconDiv icon={home} text="Civil Engineering and Real Estate" />
        <IconDiv icon={catering} text="Catering Craft" />
        <IconDiv icon={fashion} text="Fashion, style and body care" />
      </Content>
      <Content
        title="WHY LEARN OR TRAIN WITH US?"
        subtitle="Regardless of the field you choose, ESDL ensures that you are:"
      >
        <IconDiv2
          icon={education}
          text="Given proper orientation concerning your chosen field"
        />
        <IconDiv2
          icon={speaking}
          text="Trained for excellent leadership and productive followership (or membership)"
        />
        <IconDiv2
          icon={leader}
          text="Mentored for effective productivity in the chosen field"
        />
        <IconDiv2
          icon={creativity}
          text="Inspired to learn or acquire skills even when you find it difficult to blend"
        />
        <IconDiv2
          icon={ict}
          text="Provided with job offers, connections and other useful opportunities"
        />
        <IconDiv2
          icon={knowledge}
          text="Trained for effective and successful entrepreneurship"
        />
        <IconDiv2
          icon={growth}
          text="Trained in other important aspects that increase your chances of acceptability and quality of
delivery (Standards Optimization)"
        />
        <IconDiv2
          icon={home}
          text="Given access to learn a lot more, paying a lot less"
        />
      </Content>
      <Content title="WHY WE WILL SERVE YOU RIGHT">
        <IconDiv2
          icon={education}
          text="We are endowed with a myriads of expertise in various fields"
        />
        <IconDiv2
          icon={home}
          text="We work as individuals and as a team simultaneously"
        />
        <IconDiv2
          icon={growth}
          text="We are determined and focused, leaving good examples of what we teach"
        />
        <IconDiv2
          icon={knowledge}
          text="We believe in connections, networking and long-lasting relationships"
        />
        <IconDiv2
          icon={speaking}
          text="Excellence is our priority and Quality is mandatory and Productivity is our watchword"
        />
        <IconDiv2
          icon={creativity}
          text="Everyone in our team and networks are individually and collectively tested"
        />
        <IconDiv2 icon={leader} text="Our Core Values says the rest" />
      </Content>
    </div>
  );
};

export default Content1;
