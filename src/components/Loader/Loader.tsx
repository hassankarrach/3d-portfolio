import React, { useContext, useEffect, useState } from "react";
import { StyledLoader } from "./StyledLoader";
import { useTexture, PerspectiveCamera, useProgress } from "@react-three/drei";

function Loader() {
  const { loaded, total } = useProgress();
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const targetPercent = (loaded / total) * 100;

      if (progressPercent < targetPercent) {
        setProgressPercent((prevPercent) => prevPercent + 1);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [loaded, total, progressPercent]);

  return (
    <StyledLoader>
      <div className="LoaderBox">
        <div className="Text">
          {progressPercent !== 100 && <h1>Loading...</h1>}
          <h3>{progressPercent}%</h3>
        </div>

        <div className="Box">
          <div className="spine" style={{ width: progressPercent }}></div>
        </div>
      </div>
    </StyledLoader>
  );
}

export default Loader;
