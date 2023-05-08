import React, { useContext, useEffect, useState } from "react";
import { StyledLoader } from "./StyledLoader";
import { useTexture, PerspectiveCamera, useProgress } from "@react-three/drei";

function Loader() {
  const { loaded, total, progress, errors } = useProgress();
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    errors && console.log("error");
    const timer = setTimeout(() => {
      const targetPercent = (loaded / total) * 100;

      if (progressPercent < targetPercent) {
        setProgressPercent((prevPercent) => prevPercent + 1);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [loaded, total, progressPercent]);

  useEffect(() => {
    console.log(loaded);
  }, []);

  return (
    <StyledLoader>
      <div className="LoaderBox">
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
