import { useRef, useEffect, useContext } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { StateContext } from "../../context/CameraContext";
import { isMobile } from "../../utils/IsMobile";
import { PerspectiveCamera as PerspectiveCameraType } from "three"; 

function Camera() {
  const { setCameraRef } = useContext(StateContext);
  const cameraRef = useRef<PerspectiveCameraType | null>(null);
  const isMobileDevice = isMobile();

  useEffect(() => {
    setCameraRef(cameraRef);
  }, []);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      far={200}
      near={0.1}
      fov={50}
      position={[0, 0, isMobileDevice ? 3.9 : 5.9]}
    />
  );
}

export default Camera;
