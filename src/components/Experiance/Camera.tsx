import React, { useState, useRef, useEffect, useContext } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap, Linear } from "gsap";
import { StateContext } from "../../context/CameraContext";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Vector3 } from "three";
import { folder, useControls } from "leva";
import { AnimationsData } from "../../data/AnimationsData";
import { isMobile } from "../../utils/IsMobile";

function Camera() {
  const { setCameraRef, CurrentSection } = useContext(StateContext);
  const cameraRef = useRef();
  const isMobileDevice = isMobile();

  useEffect(() => {
    setCameraRef(cameraRef);
  }, []);

  const { camera } = useThree();
  // const [cameraDirection, setCameraDirection] = useState(new Vector3());

  //CameraFollowsTheCursor
  useFrame(({ mouse }) => {
    // gsap.to(cameraRef.current.position, {
    //   duration: 0.5,
    //   delay: 0.05,
    //   x: mouse.x * 0.05,
    //   y: -mouse.y * 0.05,
    //   ease: Linear.easeNone,
    // });
    // cameraRef.current.lookAt(AnimationsData[CurrentSection].CameraLookAt);
    // switch (CurrentSection) {
    //   case 1:
    //     break;
    //   case 2:
    //     break;
    //   case 3:
    //     break;
    //   case 4:
    //     break;
    //   default:
    //     break;
    // }
  });

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
