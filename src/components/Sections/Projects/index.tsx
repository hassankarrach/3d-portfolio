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

const index = React.forwardRef((props, ref: any) => {
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

        <div className="FeauturedWoksList">
          <WorkCard
            text="Nft Minting Dapp"
            Cover="6"
            techs={[
              "React js",
              "Next js",
              "GSAP",
              "Styled Components",
              "Web3.js",
            ]}
            Repo="https://github.com/hassankarrach/Web-3-NFT-Dapp"
          />
          <WorkCard
            text="My Portfolio"
            techs={[
              "React js",
              "TypeScript",
              "GSAP",
              "Styled Components",
              "Three js",
            ]}
            Repo="https://www.github.com/hassankarrach/3d-portfolio"
            demo="https://www.hassankarrach.com"
            Cover="1"
          />
          <WorkCard
            text="Wydad web app"
            techs={[
              "Next js",
              "Styled Components",
              "React Query",
              "Material UI",
              "Redux",
            ]}
            Repo="https://www.github.com/hassankarrach/Wydad-AC-Website"
            demo="https://wydad-ac-website-l9bf7ggqe-hassankarrach.vercel.app/"
            Cover="2"
            LightBg
          />
        </div>

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
