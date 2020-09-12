import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    lazyLoad: "ondemand",
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="slide-div">
      <Slider {...settings}>
        <div className="sliderDiv image1">
          <div className="pd-7l red-bg">
            <h3>SKILL UP, POWER UP!</h3>
            <p>
              Get the latest skills and head ups with ESDL. You don’t just get
              the skills; you get what to do with them. If you want to remain
              relevant in this era, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image2">
          <div className="pd-7r yellow-bg">
            <h3>KNOWLEDGE, TUTORIALS AND EXAMS</h3>
            <p>
              You need to be at the top and remain there. Quality education is
              not to be bargained; it’s a necessity. For private and general
              education and tutorials at all levels, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image3">
          <div className="pd-7l red-bg">
            <h3>THE EMOSTEL PRODUCTIVITY INITIATIVE</h3>
            <p>
              To get the experience is one thing; to be productive is another.
              When creativity meets resources and opportunities, the result is
              predictable. Whether you join as a benefactor, a beneficiary or
              both, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image4">
          <div className="pd-7r yellow-bg">
            <h3>ICT AND BUSINESS SOLUTIONS</h3>
            <p>
              Not only do we train, we can also deliver! Technology drives the
              world in all sector and businesses are usually the landing
              destinations. Whatever are your ICT and business needs, we’ve got
              you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image1">
          <div className="pd-7l red-bg">
            <h3>CONNECTIONS AND NETWORKING</h3>
            <p>
              If you want to move fast, you may walk alone... But if you must
              move far, walk with others. We transform lives and make people and
              businesses succeed through our links, connections and networks. Do
              you need any of these? We’ve got you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image2">
          <div className="pd-7r yellow-bg">
            <h3>PROJECTS AND EVENTS</h3>
            <p>
              Don’t bother yourself putting all those plans and moves on
              yourself. Leave the burden to us and face other businesses. Just a
              few chats and we are on it. Whenever you need any events or
              projects get done, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image3">
          <div className="pd-7l red-bg">
            <h3>GET ENGAGED, GET THE JOBS DONE</h3>
            <p>
              You got the skills, we’ve got the jobs. You’ve got the jobs, we’ve
              got the tested and trusted hands to execute them excellently. So
              whether you are a skilled job seeker, a freelancer or a job
              provider, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="sliderDiv image4">
          <div className="pd-7r yellow-bg">
            <h3>COUNSELING AND MENTORING</h3>
            <p>
              Sometimes life does not go the way we plan. Sometimes we just need
              to think outside the box or simply need someone to talk to.
              Sometimes we just need the right words, the right push or just a
              simple mind shift. When you need the best counseling and mentoring
              to get astounding results, we’ve got you covered.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
