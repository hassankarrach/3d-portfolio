import React, { useEffect, useState, useContext } from "react";
import { StyledLoader } from "./StyledLoader";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
//Context
import { StateContext } from "../../context/CameraContext";

function Loader() {
  const { SetStart } = useContext(StateContext);
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [Loaded, setLoaded] = useState(false);

  // Calculate the percentage of loaded items
  const percentageLoaded = (loaded / total) * 100;

  useEffect(() => {
    if (percentageLoaded == 100) setLoaded(true);
  }, [percentageLoaded]);

  // Component Animation
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.delay(2);
  //   tl.fromTo(
  //     ".loader",
  //     { y: "0%" },
  //     { y: "-100%", duration: 1.6, ease: "power4.inOut" }
  //   );
  //   return () => {
  //     tl.reverse();
  //   };
  // }, []);

  const HideLoader = () => {
    SetStart(true);
    const tl = gsap.timeline();
    tl.delay(0.1);
    tl.fromTo(
      ".loader",
      { y: "0%" },
      { y: "-100%", duration: 1.6, ease: "power4.inOut" }
    );
  };

  return (
    <StyledLoader className="loader">
      {!Loaded ? (
        <div className={`LoaderBox`}>
          <div className="Text">
            <h1>Loading...</h1>
            <h3>{Math.floor(percentageLoaded)}%</h3>
          </div>

          <div className="Box">
            <div
              className="spine"
              style={{ width: `${Math.floor(percentageLoaded)}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <button onClick={HideLoader}>Start</button>
      )}
    </StyledLoader>
  );
}

export default Loader;
