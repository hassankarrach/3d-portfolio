import React from "react";
import { StyledProjects } from "./StyledProjects";
import WorkCard from "./WorkCard";
import Data from "./WorksData";
//Icons
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
//Swiper
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const index = React.forwardRef((props, ref) => {
  return (
    <StyledProjects ref={ref}>
      <div className="ProjectsContainer">
        <div className="Title">
          <h1>Featured Work</h1>
          <div className="Icons">
            <FaGithubSquare className="Icon" size={25} />
            <FaLinkedin className="Icon" size={25} />
          </div>
        </div>
        <div className="FeauturedWoksList"></div>
        <div className="AllWorksSlide">
          <Swiper
            className={"SwiperContainer"}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={4000}
            grabCursor
            navigation={true}
          >
            {Data.map((Item, index) => {
              return (
                <SwiperSlide className="SwiperEl" key={index}>
                  <img
                    src={`./Photos/Portfolio/Preview/${Item.prev}`}
                    alt={`Preview ${index}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </StyledProjects>
  );
});

export default index;
