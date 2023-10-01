import React, {
  useRef,
  useEffect,
  useContext,
  Suspense,
  useState,
  RefObject,
} from "react";
import Room from "./Room";
import { StyledExperiance } from "./Experiance.styled";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Camera from "./Camera";
import Lights from "./Lighting";
import { OrbitControls, Html } from "@react-three/drei";
import { StateContext } from "../../context/CameraContext";
import Loader from "../Loader/Loader";

import { Color } from "three";

const Experiance = () => {
  const CanvasRef = useRef<HTMLCanvasElement | undefined>(undefined) as
    | RefObject<HTMLCanvasElement>
    | undefined;

  return (
    <StyledExperiance>
      <Suspense fallback={null}>
        <Canvas className="Canvas" flat ref={CanvasRef}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Camera />
          {/* <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          enableZoom={false}
        /> */}
          <Room />
          {/* <Model /> */}
        </Canvas>
      </Suspense>
    </StyledExperiance>
  );
};

export default Experiance;
