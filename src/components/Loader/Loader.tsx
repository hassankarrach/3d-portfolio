import React, { useEffect, useState, useContext } from "react";
import useSound from "use-sound";
import { StyledLoader } from "./StyledLoader";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
// Context
import { StateContext } from "../../context/CameraContext";

function Loader() {
  const { SetStart } = useContext(StateContext);
  const { loaded, total } = useProgress();

  // Sounds
  const [Starter] = useSound("/Sounds/startup.mp3", { volume: 0.25 });

  // Initialize percentageLoaded as 0
  const [modelLoaded, setModelLoaded] = useState(false); // Add a state for model loading
  const [percentageLoaded, setPercentageLoaded] = useState(0);

  useEffect(() => {
    console.log(loaded);
    if (total > 0) {
      setPercentageLoaded((loaded / total) * 100);
      if (loaded == 6) {
        setModelLoaded(true);
      }
    }
  }, [loaded, total, percentageLoaded]);

  const HideLoader = () => {
    if (modelLoaded) {
      SetStart(true);
      Starter();

      const tl = gsap.timeline();
      tl.delay(0.1);
      tl.fromTo(
        ".loader",
        { y: "0%" },
        { y: "-100%", duration: 1.3, ease: "power4.inOut" }
      );
    }
  };

  return (
    <StyledLoader className="loader">
      {!modelLoaded ? (
        <div className={`LoaderBox`}>
          <div className="Text">
            <h1>Loading..</h1>
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
