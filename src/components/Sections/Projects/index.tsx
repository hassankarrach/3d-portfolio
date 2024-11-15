import React from "react";
import { StyledProjects } from "./StyledProjects";
import WorkCard from "./WorkCard";
import Data from "./WorksData";

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
       
        <div className="TopFolder">
          <div className="FolderPath">
            <h1>Projects</h1>
            <span>/Portfolio/Projects</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="183.5px"
            height="108.5px"
            className="SvgTopFolder"
          >
            <path
              className="Path"
              fillRule="evenodd"
              stroke="rgba(89, 89, 144, 0.5)"
              strokeWidth="1px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="rgba(89, 89, 144, 0.1)"
              d="M1.500,105.500 C1.500,105.500 1.500,29.741 1.500,7.543 C1.500,3.732 2.500,2.500 2.500,2.500 C2.500,2.500 3.591,1.500 7.449,1.500 C53.588,1.500 124.500,1.500 124.500,1.500 L181.500,106.500 "
            />
          </svg>
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
            text="1337Bg"
            techs={[
              "React js",
              "TypeScript",
              "Styled Components",
            ]}
            Repo="https://github.com/hassankarrach/1337bg"
            demo="https://www.1337bg.live"
            Cover="11"
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
  slidesPerView={"auto"}
  autoplay={{
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  speed={4000}
  allowTouchMove={false}
  simulateTouch={false}
  navigation={false}
>
  {Data.map((Item, index) => (
    <SwiperSlide className="SwiperEl" key={index}>
      <div className="Element" style={{backgroundImage : `url(./Photos/Portfolio/Preview/${Item.prev})`}}>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </div>
    </StyledProjects>
  );
});

export default index;
