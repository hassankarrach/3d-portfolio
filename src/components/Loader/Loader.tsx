import React, { useContext, useEffect, useState } from "react";
import { StyledLoader } from "./StyledLoader";
import { useTexture, PerspectiveCamera, useProgress } from "@react-three/drei";
import { StateContext } from "../../context/CameraContext";

function Loader() {
  //context
  const { LoadingStatus, setLoadingStatus } = useContext(StateContext);

  const { loaded, total, progress, errors } = useProgress();
  const [progressPercent, setProgressPercent] = useState(0);
  const [FadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    errors && console.log("error");
    const timer = setTimeout(() => {
      const targetPercent = (loaded / total) * 100;

      if (progressPercent < targetPercent) {
        setProgressPercent((prevPercent) => prevPercent + 1);
      }
    }, 10);

    progressPercent === 100 && setLoadingStatus(true);
    return () => clearTimeout(timer);
  }, [loaded, total, progressPercent]);

  return (
    <StyledLoader>
      <div className={`LoaderBox`}>
        {/* <div className="Text">
          <h1>Loading...</h1>
          <h3>{loaded}%</h3>
        </div>

        <div className="Box">
          <div className="spine" style={{ width: loaded }}></div>
        </div> */}
        <h1>Loading {progressPercent}</h1>
      </div>
    </StyledLoader>
  );
}

export default Loader;
